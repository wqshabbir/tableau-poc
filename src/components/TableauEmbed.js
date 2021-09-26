import React, {useRef, useEffect} from 'react';

const {tableau} = window;

function TableauEmbed()
{
    const ref = useRef(null);
    console.log (ref);
    const url = "https://public.tableau.com/views/RegionalSampleWorkbook/Storms";

    function initViz() {
        new tableau.Viz(ref.current, url);
    }

    useEffect(() => {
        initViz();
    }, []);

    return <div>
        <p>This is Tableau Dashboard</p>
        <div ref={ref}></div> 
    </div>
}

export default TableauEmbed