export default async function Home() {
  const res = await fetch('https://dummyjson.com/products');
  const data = await res.json();
  console.log(data);

  return (
    <div className='p-5'>
      <h1 className='text-3xl mb-5'>Test Next Js</h1>
      {data.products.map((d) => (
        <div key={d.id} className='mb-2'>
          <p>{d.title}</p>
          <p className='text-green-400'>{d.warrantyInformation}</p>
        </div>
      ))}
    </div>
  );
}
