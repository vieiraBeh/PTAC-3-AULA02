import Image from 'next/image'

export default async function Home() {
  const req = await fetch("http://localhost:3003/alunos",{
  cache:"no-cache"
});
  const alunos= await req.json();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {
        alunos.map(x =>(
           console.log(x.nome)
          ))
      }
    </main>
  )
}
