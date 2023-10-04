import { useState } from "react";
import ActionList from "./ActionList";
import PostList from "./PostList";

export default function MainPage() {
    // const [postList, setPostList] = useState<Post[]>([]);
    // const [actionList, setActionList] = useState<Action[]>([]);
    const [error, setError] = useState("");

    // fetch all the movies and send the right query parameter in page and search
    async function getMovies() {
        // const url = `http://www.omdbapi.com/?s=${searchText}&apikey=41dde112&page=${currentPage}`;
        // const response = await fetch(url);
        // if (response.status === 200) {
        //     const data = (await response.json()) as FullApiResponse;
        //     if (data.Response === ResponseStatus.True) {
        //         setPostList(data.Search);
        //     } else {
        //         setError(data.Error);
        //     }
        // } else {
        //     setError("network error");
        // }
    }

    //   useEffect for fetching?

    return (
        <div className="flex flex-row">
            <PostList />
            <ActionList />
        </div>
    );
}
