// src/index.ts
import express, {} from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const port = 3000;
// Serve static files from the root directory
app.use(express.static(process.cwd()));
app.get('/', (req, res) => {
    const htmlPath = path.join(process.cwd(), 'index.html');
    res.sendFile(htmlPath);
});
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map