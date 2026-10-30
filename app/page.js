import fs from 'node:fs';
import path from 'node:path';
import Site from './Site';

// El contenido de la página está en app/body.html (se lee al compilar).
export default function Page() {
  const html = fs.readFileSync(path.join(process.cwd(), 'app', 'body.html'), 'utf8');
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: html }} />
      <Site />
    </>
  );
}
