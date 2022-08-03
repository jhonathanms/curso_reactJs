import { useEffect, useState } from "react"

export const useFetch = (URL) => {
    const [data, setData] = useState(null);

    // Refatorando hooks de requisição GET e POST.
    const [config, setConfig] = useState(null);
    const [method, setMethod] = useState(null);
    const [callFetch, setCallFetch] = useState(false);

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);


    // Popula os dados de configurações para requisições POST.
    const httpConfig = (data, method) => {
        if (method === "POST") {
            setConfig(
                {
                    method,
                    headers: { "Content-Type": "Application/json" },
                    body: JSON.stringify(data)
                });
            setMethod(method);
        }
    }

    // Executa um GET quando a URL e o CALLFETCH é alterado.
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            
            try {
                const response = await fetch(URL);
                const json = await response.json();
                setData(json);
            } catch (error) {

                setError("Houve algum erro")
            }

            setLoading(false);
        };

        fetchData();

    }, [URL, callFetch]);


    // Executar o GET quando a requisição for POST
    useEffect(() => {
        const httpRequest = async () => {
            if (method === "POST") {
                let fetchOptions = [URL, config];
                const response = await fetch(...fetchOptions);
                const json = response.json();
                setCallFetch(json);
            }
        }

        httpRequest();

    }, [config, URL, method])

    return { data, httpConfig, loading, error}; // retorna os dados da requisiçao e a função httpCon...
};