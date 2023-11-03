import React from 'react'

export default function Skillset({ image, title }) {
	return (
		<div className="h-[120px] w-full py-10 flex flex-col justify-center border border-light-blue items-center bg-darker-blue">
			<img src={image} alt={title} />
			<h4 className="text-slate-300 font-inter mt-2">{ title }</h4>
		</div>
	)
}
