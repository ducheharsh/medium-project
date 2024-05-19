export function Input({id, placeholder,onChange, label}:any){
    return <div className="w-full mb-2">
    <h2 className="font-semibold mb-2">{label}</h2>
    <input onChange={onChange} className="border rounded-lg w-full h-12 p-4" placeholder={placeholder} id={id}></input>
  </div>
}