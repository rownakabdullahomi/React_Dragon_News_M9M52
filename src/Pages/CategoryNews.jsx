import { useLoaderData } from "react-router-dom";

const CategoryNews = () => {
    const {data} = useLoaderData();
    return (
        <div>
            {data.length}
        </div>
    );
};

export default CategoryNews;