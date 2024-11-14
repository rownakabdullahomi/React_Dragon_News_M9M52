import { useLoaderData } from "react-router-dom";
import Header from "../components/Header";
import RightNavbar from "../components/layout-components/RightNavbar";

const NewsDetails = () => {

    const {data: news} = useLoaderData();
    console.log(news[0]);

    return (
        <div>
            <header>
                <Header></Header>
            </header>
            <main className="w-11/12 mx-auto grid grid-cols-4 gap-5">
            <section className="col-span-3">
                <h2 className="font-semibold mb-3">Dragon News</h2>
            </section>
            <aside className="col-span-1">
                <RightNavbar></RightNavbar>
            </aside>
            </main>
        </div>
    );
};

export default NewsDetails;