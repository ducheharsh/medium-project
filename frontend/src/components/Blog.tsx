import axios from "axios";


interface BlogProps {
    title:string,
    content:string,
    id:string,
    authorName:string,
    createdAt:string
}

export function Blog({title, content,id, authorName, createdAt}:BlogProps){
    var dt = new Date(createdAt);
    const name = localStorage.getItem("name");
    console.log(name);
    console.log(authorName);
    function numberOfWords(str: string) {
        const words = str.match(/\S+/g);
        if(words?.length!==0){
            return words?.length;
        }
        else{
            return 0;
        }
    }
    const word:any = numberOfWords(content)
    return <div className=" grid grid-cols-3 hover:cursor-pointer min-w-full md:min-w-min md:max-w-3xl relative z-10" onClick={()=>{
        window.location.href = `/blogs/${id}`
    }}><div className="col-span-3 md:col-span-2 z-20">
        <div>
        <div className="flex max-w-2/3 mt-4 z-20">
        <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full z-20">
    <span className="font-medium text-gray-600 ">{authorName? authorName[0]: "J"}</span>
</div>
{authorName? <div className=" mx-2 mt-2 font-light z-20 text-slate-800">{authorName}</div>: <div className="mx-2 mt-2 font-light text-slate-800 ">John Doe</div>}
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 mt-3 mx-1">
  <path fill-rule="evenodd" d="M6.22 4.22a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06l-3.25 3.25a.75.75 0 0 1-1.06-1.06L8.94 8 6.22 5.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
</svg>
<div className="mt-2 flex z-30">
{dt.toDateString()}

</div>
<button className="mt-2 mx-2 relative z-1000 ">{name === authorName? <svg onClick={(event)=>{
    event.stopPropagation()
    axios.delete(`https://backend.ducheharsh.workers.dev/api/v1/blog/delete/${id}`, {
        headers:{
            Authorization: localStorage.getItem("token")
        }
    }).then((msg)=>{
        console.log(msg);
        window.location.reload();
    })
}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="red" className=" ml-2 w-5 h-5 hover: animate-pulse z-50 hover:bottom-3 ">
  <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
</svg>
: <div></div>}</button>

        </div>
        <div className="mb-8 mt-6">
        <h1 className="text-2xl mb-3 font-bold">{title}</h1>
        <p className="font-serif w-max-2/3 font-light text-slate-800 mt-2">{content.length < 100? content: content.slice(0, 100) + " ..."}</p>
        </div>
        <div className=" mb-10 font-semibold text-sm text-slate-500 mt-2">{Math.ceil((word/200))} min read </div>
    </div>
    
    </div>

    <div>
        <img src="https://png.pngtree.com/png-vector/20221008/ourmid/pngtree-writing-blog-concept-hand-drawn-isolated-vector-isolated-first-flight-vector-png-image_39548768.png" alt="Blog" className="hidden md:block w-50 h-40 ml-5 rounded-md mt-16"></img>
    </div>
    <hr className="mt-3 col-span-3 "></hr>

</div>



}