import MovieVideos from "@/components/movie-videos";
import { API_URL } from "../../../(home)/page"
import MovieInfo from "@/components/movie-info";
import { Suspense } from "react";


export default async function MovieDetail(
    { params: { id }, 
}: { 
    params: { id: string };
}) {
    return <div>
        <Suspense fallback={<h1>Loading moive info</h1>}>
            <MovieInfo id={id}/>
        </Suspense>
        <Suspense fallback={<h1>Loading moive videos</h1>}>
            <MovieVideos id={id}/>
        </Suspense>
    </div>
}
