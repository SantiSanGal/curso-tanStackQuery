import { githubApi } from "../../api/github.api";
import { sleep } from "../../helpers";

export const getLabels = async (): Promise<unknown[]> => {
    await sleep(1500);

    const { data } = await githubApi.get('/labels')

    console.log('data', data);
    return data
}