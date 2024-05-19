

interface BlogProps {
    title:string,
    content:string,
    id:string,
    authorName:string,
    createdAt:string
}

export function Blog({title, content,id, authorName, createdAt}:BlogProps){
    var dt = new Date(createdAt);
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
    return <div className="p-4" onClick={()=>{
        window.location.href = `/blogs/${id}`
    }}>
        <div className="flex max-w-2/3">
        <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full ">
    <span className="font-medium text-gray-600 ">{authorName? authorName[0]: "J"}</span>
</div>
{authorName? <div className="mx-2 mt-2 font-light text-slate-800 mx-4">{authorName}</div>: <div className="mx-2 mt-2 font-light text-slate-800 mx-4">John Doe</div>}
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 mt-3 mx-1">
  <path fill-rule="evenodd" d="M6.22 4.22a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06l-3.25 3.25a.75.75 0 0 1-1.06-1.06L8.94 8 6.22 5.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
</svg>
<div className="mt-2">
{dt.toDateString()}
</div>
        </div>
        <div className="mb-8 mt-3">
        <h1 className="text-2xl mb-3 font-bold">{title}</h1>
        <p className="font-serif font-extralight text-slate-800 mt-2">{content.length < 100? content: content.slice(0, 100) + " ..."}</p>
        </div>
        <div className=" mb-10 font-semibold text-sm text-slate-500 mt-2">{Math.ceil((word/200))} min read </div>

        <hr className="mt-3"></hr>
    </div>

}