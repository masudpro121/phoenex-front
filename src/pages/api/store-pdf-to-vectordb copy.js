import { PDFLoader } from "langchain/document_loaders/fs/pdf";
import { createRouter } from "next-connect";
import { Pinecone } from "@pinecone-database/pinecone";
import { OpenAIEmbeddings } from "@langchain/openai";
import { PineconeStore } from "@langchain/community/vectorstores/pinecone";
import { TokenTextSplitter } from "langchain/text_splitter";
import {
  CharacterTextSplitter,
  RecursiveCharacterTextSplitter,
} from "langchain/text_splitter";
import { Document } from "@langchain/core/documents";
const pdf = require("pdf-parse");

const fs = require("fs");
const multer = require("multer");

export const config = {
  api: {
    bodyParser: false,
  },
};
const router = createRouter();
const upload = multer({ storage: multer.memoryStorage() });
// const upload = multer({
//   storage: multer.diskStorage({
//     destination: './public/uploads',
//     filename: (req, file, cb) => cb(null, file.originalname+""+Date.now()),
//   }),
// });

router.use(upload.single("file")).post(async (req, res) => {
  const docs = await pdf(req.file.buffer);
  // if(docs){
  //   await fs.unlinkSync(req.file.path)
  // }
  const pinecone = new Pinecone();
  const namespace = "pdf-" + Date.now();
  const pineconeIndex = pinecone.Index(process.env.PINECONE_INDEX);

  if (docs.numpages === 0) {
    console.log("No documents found.");
    return;
  }

  // Chunk it
  // const splitter = new CharacterTextSplitter({
  //   separator: " ",
  //   chunkSize: 250,
  //   chunkOverlap: 10,
  // });

  // const splitter = new RecursiveCharacterTextSplitter({
  //   separator: " ",
  //   chunkSize: 250,
  //   chunkOverlap: 10,
  // });

  const splitter = new TokenTextSplitter({
    encodingName: "gpt2",
    chunkSize: 250,
    chunkOverlap: 10,
    separator: " ",
  });

  const splitDocs = await splitter.splitDocuments([
    new Document({ pageContent: docs.text }),
  ]);

  console.log(splitDocs, 'split docs');
  // Reduce the size of the metadata
  const reducedDocs = splitDocs.map(doc=>{
    let metadata = {...doc.metadata}
    delete metadata.pdf
    doc.metadata = metadata
    return new Document({
      pageContent: doc.pageContent,
      metadata
    });
  })

  await PineconeStore.fromDocuments(reducedDocs, new OpenAIEmbeddings(), {
    pineconeIndex,
    maxConcurrency: 5,
    namespace
  });
  return res.json({namespace})
});

export default router.handler({
  onError: (err, req, res) => {
    console.error(err.stack);
    res.status(err.statusCode || 500).end(err.message);
  },
});
