import { useEffect, useState } from "react";
import { Fragment } from "react/jsx-runtime";
import { getTopLevelDomains } from '../../api/global';
import './TopLevelDomains.css';

export default function TopLevelDomains() {
    const [data, setData] = useState(null);

    useEffect(() => {
        const loadingData = async () => {
            const res = await getTopLevelDomains();
            setData(res);
        };

        loadingData();
    }, []);

    return data && (
        <div className="top-level-domains flex-center">
            {
                data.map((elem, index, arr) => (
                    <Fragment key={elem.id}>
                        <p>{elem.label}</p>
                        {index !== arr.length - 1 && <div className="circle"></div>}
                    </Fragment>
                ))
            }
        </div>
    )
}
