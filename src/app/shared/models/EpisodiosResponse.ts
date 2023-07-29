import { Episodios } from "./Episodios";
import Info from "./Info";

export interface EpisodiosResponse{
    info:Info;
    results:Episodios[];
}