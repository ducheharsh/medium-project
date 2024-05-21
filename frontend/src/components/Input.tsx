export function Input({id, placeholder,onChange, label, type}:any){
    return <div className="w-full md:w-full mb-2">
    <h2 className="font-semibold mb-2">{label}</h2>
    <input type={type} onChange={onChange} className="border rounded-lg w-full h-12 p-4" placeholder={placeholder} id={id}></input>
  </div>
}
