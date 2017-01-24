function importData ()
{
    d3.json("agewise-literate.json", function (data)
    {
        console.log(data);

        var canvas = d3.select(".importContainer").append("svg")
            .attr("width", 500)
            .attr("height", 500);

            var barWidth=35;
            var barOffset=5;

             canvas.selectAll("rect")
            .data(data)
            .enter()
            .append("rect")
            .attr("height", function (d) 
            {
                return d.Literate_Persons * 60
            })
            .attr("width", barWidth)
            .attr("x", function (d, i)
            {
                return i * (barWidth + barOffset);
            })
             .attr("y", function (d, i)
            {
                return height-d;
            })
            .attr("fill", "red");

        // canvas.selectAll("text")
        //     .data(data)
        //     .enter()
        //     .append("text")
        //     .attr("fill", "#f3f4f5")
        //     .attr("y", function (d,i)
        //     {
        //         return i * 80 + 32;
        //     })
        //     .attr("x", 5)
        //     .text(function (d)
        //     {
        //         return d.Age_group + " Lit-Persons: " + d.Literate_Persons;
        //     })


        // canvas.selectAll("rect")
        //     .data(data)
        //     .enter()
        //     .append("rect")
        //     .attr("height", function (d) 
        //     {
        //         return d.Literate_Persons * 60
        //     })
        //     .attr("width", 50)
        //     .attr("x", function (d, i)
        //     {
        //         return i * 80
        //     })
        //     .attr("fill", "red");

        // canvas.selectAll("text")
        //     .data(data)
        //     .enter()
        //     .append("text")
        //     .attr("fill", "#f3f4f5")
        //     .attr("y", function (d,i)
        //     {
        //         return i * 80 + 32;
        //     })
        //     .attr("x", 5)
        //     .text(function (d)
        //     {
        //         return d.Age_group + " Lit-Persons: " + d.Literate_Persons;
        //     })
    })
}







