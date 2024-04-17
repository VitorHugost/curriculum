interface Props {
    title:string
}

export function Hr({title}:Props){
    return(
        <fieldset className="border border-b-0 border-r-0 border-l-0 border-zinc-400">
        <legend className="m-auto px-4 text-zinc-300 2xl:text-2xl text-lg">{title}</legend>
      </fieldset>
    )
}