export default function Input({ label, invalid, ...props }) {

  let labelClasse = 'block mb-2 text-xs font-bold tracking-wide uppercase';
  let inputClasse = 'w-full px-3 py-2 leading-tight border rounded shadow'

  if (invalid){
    labelClasse += ' text-red-400';
    inputClasse += ' text-red-500 bg-red-100 border-red-300';
  }else{
    labelClasse += ' text-stone-300';
    inputClasse += ' text-gray-700 bg-stone-300'
  }

  return (
    <p>
      <label className={labelClasse}>{label}</label>
      <input className={inputClasse} {...props} />
    </p>
  );
}