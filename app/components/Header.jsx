export default function Header({dataCount}) {
    return (
        <div className="card-header">
            <div>
                Title : Next JS
            </div>
            <div>
                Count: Total Posts {dataCount}
            </div>
        </div>
    )
}


