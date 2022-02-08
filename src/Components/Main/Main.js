import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Profile } from "../../Pages/Profile";
import { Hello } from "../../Pages/Hello";
import "../../sass/Custom.scss"
import {Home} from "../../Pages/Home";



const Pages = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/profile" element={<Profile />}/>
            <Route path="/hello" element={ <Hello />}/>
        </Routes>
    )
}

const Main = () =>{
    return(<main className="mainPage container">
            <h1 className={"h1test"}>This Is Main Page</h1>
            <h3 className="testText">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis consequatur dolore dolores doloribus dolorum earum error est libero, magni nihil odit officia optio quae quod tenetur? Accusantium non sunt tempore!
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur deleniti dolor dolorem ducimus ea enim, eum fugiat id, laboriosam obcaecati possimus quam, quibusdam quod sint velit? Eaque in magni quo?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor earum enim est, eum ex, exercitationem, fuga illo iste nam natus nisi nulla provident quaerat qui recusandae reiciendis sit sunt veritatis?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque eum harum illo itaque praesentium ratione similique? Amet aperiam aspernatur corporis dolorem esse iusto laboriosam quasi quia ratione reiciendis repudiandae, suscipit.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus ea, repellendus! Alias ipsum laborum magnam maiores molestiae nam nostrum obcaecati omnis, quae quas rerum saepe sunt ullam velit voluptatem voluptatum.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aut delectus deleniti dolores ducimus fugiat illo modi molestias nulla quos, rem soluta temporibus, veritatis. Ea laborum nesciunt obcaecati repellat sunt.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquid aperiam autem consequatur corporis dolorem eligendi enim, ex fuga hic illum ipsa magni neque nesciunt nihil pariatur perspiciatis placeat tenetur.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A amet cumque eligendi enim ex facere hic laudantium maiores minus necessitatibus nemo, nostrum nulla, numquam qui sint sit tempore ullam, voluptatum!
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, consectetur culpa debitis ea eaque, et illo impedit in, ipsa labore laboriosam nam necessitatibus nisi qui quisquam rerum sequi tempore voluptate!
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias amet consequuntur dolore enim, esse laboriosam libero, minima pariatur possimus quas quidem rem sed sequi sint sit! Blanditiis illum reprehenderit vel.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, distinctio dolorem ex necessitatibus officia pariatur. Ad alias dicta, distinctio, enim et hic laudantium nisi numquam optio placeat quas quo sequi!
            </h3>

    <Pages/>
    </main>
    )
}
export default Main
