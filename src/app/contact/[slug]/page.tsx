export default function ContactItem({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  console.log(params, searchParams);

  return <div className='bg-red-500'>Contact Item</div>;
}
