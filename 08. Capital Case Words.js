function solve(input) {
    let text = input.join();
    let words = text.split(/[^a-zA-Z]+/)
        .filter(x => x)
        .filter(w => w === w.toUpperCase())
        .join(", ");
    console.log(words);

}
solve([ 'We start by HTML, CSS, JavaScript, JSON and REST.',
    'Later we touch some PHP, MySQL and SQL.',
    'Later we play with C#, EF, SQL Server and ASP.NET MVC.',
    'Finally, we touch some Java, Hibernate and Spring.MVC.' ]);