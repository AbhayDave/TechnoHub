import HTMLReactParser from "html-react-parser";


function PostDisplay({content}) {
  return <div>{HTMLReactParser(content)}</div>;
}

export default PostDisplay