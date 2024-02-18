import { DevLinksWrapper } from "./style";
import linkData from "../data/links.json";

function DevLinks() {

     var data = linkData

     const DataRender = () => {
          return (
               data.map((el, id) =>
                    <div>
                         <a href={el.url} target="_blank" className="links">
                              <p key={id}>{el.name}</p>
                              <span>&gt;</span>
                         </a>
                    </div>
               )
          )
     }

     return (
          <DevLinksWrapper>
               <div>
                    <img height="125px" width="125px" src="https://avatars.githubusercontent.com/u/89466514?v=4" alt="my-picture" />
                    <h1 id="title">@Natanalpe</h1>
               </div>
               <main>
                    <DataRender />
               </main>
               <footer>By @Natanalpe</footer>
          </DevLinksWrapper>
     )
}

export default DevLinks;