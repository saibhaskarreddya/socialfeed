import "./Trendingtags.css"

const tags = [
  "#life",
  "#productivity",
  "#buildinpublic",
  "#realtime",
  "#engineering",
  "#design",
  "#typography",
  "#learning",
  "#math",
  "#darkmode",
  "#career",
  "#css",
  "#saas",
  "#worksforme",
];

function Trendingtags(){
    return(
        <div className="tagSection">
            <h3>Trending Hashtag</h3>

              <div className="tagContainer">
                {tags.map((tag)=>(
                    <button className="tagBtn" key={tag}>{tag}</button>
                 ))}

              </div>
        </div>
    )
}

export default Trendingtags;