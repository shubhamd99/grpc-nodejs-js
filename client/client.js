const { loadPackageDefinition, credentials } = require('grpc');
const protoLoader = require('@grpc/proto-loader');

const PROTO_PATH = './proto/notes.proto';
const packageDefinition = protoLoader.loadSync(PROTO_PATH);
const notesProto = loadPackageDefinition(packageDefinition);
// // The notesProto object has the full package hierarchy
const NoteService = notesProto.NoteService;

// To call our gRPC Server method and see the response, we will create a gRPC node.js Client
const client = new NoteService('localhost:50051', credentials.createInsecure());

module.exports = client;