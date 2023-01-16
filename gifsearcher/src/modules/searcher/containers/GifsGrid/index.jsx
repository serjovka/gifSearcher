import "./styles.css";

export default function({gifs}){
    let grid = gifs.map(({images, id}) => {
        console.log(images);
        return <img src={images.fixed_height.url} key={id}/>
    });

    return(
            <div className="gifs">
                {grid}
            </div>
    );
}