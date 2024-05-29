import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MDEditor from '@uiw/react-md-editor';
import { getCodeString } from 'rehype-rewrite';
import { getCommands, getExtraCommands } from "@uiw/react-md-editor/commands-cn";
import katex from 'katex';

import 'katex/dist/katex.css';

export function CreateBlog() {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/signin");
    }
  }, []);

  const [title, setTitle] = useState(localStorage.getItem("title") || "");
  const [content, setContent] = useState(localStorage.getItem("content") || "");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    localStorage.setItem("content", content);
  }, [content]);

  const createBlog = async () => {
    try {
      await axios.post(
        "https://backend.ducheharsh.workers.dev/api/v1/blog",
        {
          title,
          content,
        },
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        },
      );
      setSuccess("Blog Created Successfully");
      localStorage.removeItem("title");
      localStorage.removeItem("content");
      navigate("/blogs");
    } catch (err: any) {
      setError(err.response.data.message);
    }
  };
  return (
    <div className="max-w-2/3 md:px-24 pt-10 md:pt-20 px-3">
      <svg
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        width="130.000000pt"
        height="130.000000pt"
        viewBox="0 0 1200.000000 1200.000000"
        preserveAspectRatio="xMidYMid meet"
        className="hidden md:block z-0 absolute right-44 top-0 opacity-30"
      >
        <g
          transform="translate(0.000000,1200.000000) scale(0.100000,-0.100000)"
          fill="#000000"
          stroke="none"
        >
          <path
            d="M3335 11610 c-89 -71 -217 -245 -276 -376 -127 -284 -182 -592 -182
-1029 0 -430 64 -892 194 -1410 103 -407 219 -704 355 -912 75 -113 244 -283
350 -352 l81 -52 7 -152 c24 -547 135 -1094 287 -1415 90 -191 232 -373 379
-487 51 -39 57 -48 74 -111 25 -92 99 -280 149 -379 233 -467 654 -879 1122
-1101 367 -173 753 -257 1190 -257 269 0 495 27 737 88 53 14 98 25 101 25 2
0 7 -129 10 -287 4 -159 11 -342 17 -408 15 -169 48 -423 61 -469 14 -50 50
-86 87 -86 54 0 75 30 137 187 350 893 913 1770 1577 2459 66 69 120 133 124
149 11 45 -25 135 -63 157 -31 19 -32 19 -180 -21 -223 -61 -440 -100 -640
-117 -68 -5 -89 -3 -120 11 -36 17 -38 17 -78 -4 -35 -19 -56 -21 -176 -21
-530 0 -1097 127 -1584 355 -77 35 -107 45 -131 40 -60 -11 -85 -69 -55 -128
l18 -36 -23 -5 c-39 -10 -58 -49 -51 -105 13 -114 105 -320 217 -490 77 -117
141 -202 493 -654 153 -197 277 -361 275 -363 -9 -8 -170 -45 -279 -63 -458
-78 -927 -41 -1350 104 -140 49 -382 168 -503 249 -336 225 -597 520 -775 874
-51 102 -114 252 -109 258 2 1 35 -6 73 -18 47 -13 103 -20 170 -21 168 -2
275 42 380 155 144 156 234 433 222 683 -10 194 -73 342 -200 461 -171 161
-372 195 -577 97 -88 -42 -207 -169 -259 -273 -73 -151 -85 -212 -85 -467 l-1
-222 -28 27 c-45 42 -152 209 -196 303 -120 261 -219 739 -253 1219 -6 93 -10
172 -7 174 2 2 36 -4 76 -14 102 -27 224 -34 313 -21 388 60 686 378 777 829
25 121 24 406 -1 557 -86 525 -256 793 -552 870 -158 41 -321 -5 -423 -121
-77 -87 -122 -197 -191 -459 -98 -374 -162 -798 -177 -1180 -7 -190 1 -184
-111 -80 -221 205 -359 485 -491 995 -209 807 -262 1504 -156 2036 54 270 158
482 317 645 68 70 70 73 65 113 -11 78 -83 101 -152 46z m1363 -2200 c146 -78
237 -242 306 -552 79 -356 59 -661 -62 -903 -126 -254 -335 -407 -578 -422
-99 -6 -194 7 -281 39 -42 15 -53 24 -53 41 0 12 5 116 10 232 21 444 89 866
205 1275 39 134 69 202 117 256 51 58 98 75 193 71 68 -3 90 -8 143 -37z m507
-2921 c117 -44 224 -179 255 -320 18 -80 8 -274 -19 -373 -46 -172 -141 -312
-241 -355 -66 -28 -163 -37 -242 -21 -89 17 -216 68 -222 88 -23 77 -38 262
-34 426 4 165 7 188 32 261 85 248 276 367 471 294z m2092 -1179 c18 -8 22
-15 17 -38 -8 -39 32 -133 171 -408 102 -200 167 -352 231 -536 12 -38 21 -68
19 -68 -4 0 -375 478 -459 592 -74 101 -161 245 -202 334 -25 54 -84 229 -84
249 0 2 64 -24 143 -57 78 -32 152 -63 164 -68z m360 -309 c120 -243 226 -430
360 -635 87 -133 138 -224 130 -233 -6 -5 -144 195 -234 337 -109 173 -172
286 -224 401 -28 63 -79 168 -113 234 -33 66 -62 123 -64 126 -2 4 5 5 15 2
12 -3 58 -85 130 -232z m1936 135 c-15 -18 -65 -74 -110 -124 l-82 -91 -49 94
-49 95 36 6 c20 3 83 16 141 29 148 32 147 32 113 -9z m-1723 9 c32 -8 44 -14
30 -14 -14 -1 -35 -7 -46 -15 -19 -13 -22 -12 -38 15 -20 33 -20 33 54 14z
m178 -31 c35 -5 42 -10 36 -23 -14 -32 -16 -68 -6 -104 6 -21 9 -37 7 -37 -1
0 -28 35 -60 78 -32 42 -65 83 -74 91 -14 11 -11 12 19 7 19 -3 54 -8 78 -12z
m313 -39 l56 -6 -5 -48 c-6 -64 13 -119 104 -310 80 -167 80 -166 -34 -56 -57
53 -74 80 -153 237 -49 98 -89 182 -89 187 0 5 15 8 33 6 17 -3 57 -7 88 -10z
m719 -35 c0 -22 -2 -40 -4 -40 -5 0 -46 65 -46 74 0 3 11 6 25 6 23 0 25 -4
25 -40z m-235 -72 c16 -51 31 -99 33 -106 2 -7 -36 17 -85 53 -48 36 -100 68
-116 72 -23 5 -67 48 -67 67 0 3 46 6 103 6 l102 0 30 -92z m443 -174 c2 -2
-20 -32 -49 -69 l-53 -66 -18 23 c-17 23 -16 23 15 34 33 11 67 56 67 88 0 16
2 17 18 5 9 -7 19 -14 20 -15z m-287 -250 l60 -46 -34 -46 c-19 -26 -48 -66
-65 -90 l-31 -43 -25 37 -26 38 29 12 c60 25 76 82 41 147 -11 20 -17 37 -14
37 3 0 32 -21 65 -46z m-171 -366 c0 -4 -37 -65 -83 -135 -46 -70 -93 -143
-104 -162 l-21 -33 -37 108 c-20 60 -39 115 -42 123 -3 8 13 3 39 -13 56 -33
79 -33 117 0 43 36 41 78 -4 155 -19 33 -35 62 -35 64 0 7 169 -100 170 -107z
m-851 -120 c12 -19 11 -23 -10 -39 -29 -23 -33 -23 -49 -4 -11 13 -9 20 10 40
29 30 32 31 49 3z m341 -443 c41 -50 81 -98 87 -106 11 -13 -5 -51 -91 -225
-57 -115 -123 -255 -147 -312 -42 -98 -44 -101 -51 -70 -23 115 -37 725 -22
911 l7 75 71 -91 c39 -51 104 -133 146 -182z"
          />
        </g>
      </svg>

      <div className="flex justify-between">
        <svg
          onClick={() => {
            navigate("/blogs");
          }}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1"
          stroke="currentColor"
          className="w-8 h-8 hover:animate-ping"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
          />
        </svg>
        <button
          type="button"
          className=" focus:outline-none text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-semibold rounded-full text-md font-sans px-6 py-2.5 me-2 mb-2 "
          onClick={() => {
            createBlog();
          }}
        >
          Publish
        </button>
      </div>

      <div className="mt-6 flex">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="0.8"
          stroke="currentColor"
          className="w-16 h-16 mt-5 text-slate-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>

        <input
          placeholder={"Title"}
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
            localStorage.setItem("title", e.target.value);
          }}
          className="w-full px-4 mt-3 placeholder:font-extralight placeholder:font-times-light border-none outline-none ml-2 rounded-lg text-5xl md:text-6xl font-bold"
        ></input>
      </div>
      <div className="mt-6" data-color-mode="light">

<MDEditor
      style={{}}
      className=" w-full p-3 placeholder:font-extralight placeholder:font-times font-times border-none outline-none text-xl md:text-2xl rounded-lg"
      value={content}
      preview="edit"
      textareaProps={
        {placeholder: "Write your blog here"}
      }
      commands={[...getCommands()]}
      extraCommands={[...getExtraCommands()]}
      onChange={(val:any) => {setContent(val)
        localStorage.setItem("content", val.target.value);}
      }
      height={2000}
      previewOptions={{
        components: {
          code: ({ children = [], className, ...props }) => {
            if (typeof children === 'string' && /^\$\$(.*)\$\$/.test(children)) {
              const html = katex.renderToString(children.replace(/^\$\$(.*)\$\$/, '$1'), {
                throwOnError: false,
              });
              return <code dangerouslySetInnerHTML={{ __html: html }} style={{ background: 'transparent' }} />;
            }
            const code = props.node && props.node.children ? getCodeString(props.node.children) : children;
            if (
              typeof code === 'string' &&
              typeof className === 'string' &&
              /^language-katex/.test(className.toLocaleLowerCase())
            ) {
              const html = katex.renderToString(code, {
                throwOnError: false,
              });
              return <code style={{ fontSize: '150%' }} dangerouslySetInnerHTML={{ __html: html }} />;
            }
            return <code className={String(className)}>{children}</code>;
          },
        },
      }}
    />
        <div id="preview"></div>
      </div>

      {error && (
        <div className="mt-6 p-4 bg-red-200 text-red-800 rounded-lg">
          {error}
        </div>
      )}
      {success && (
        <div className="mt-6 p-4 bg-green-200 text-green-800 rounded-lg">
          {success}
        </div>
      )}
    </div>
  );
}
