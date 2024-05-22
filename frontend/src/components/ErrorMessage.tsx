


export function ErrorMessage({message, code}:any){
  
    return <div className="text-red-500 flex"> 
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 pr-1 mt-1 h-5">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
</svg>
  <span className="capitalize pr-1">{code}:</span><span className=" text-left">{message}</span>
    </div>

}