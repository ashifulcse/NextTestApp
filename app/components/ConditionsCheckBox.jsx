export default function ConditionsCheckBox({
    setIsCheckedStatic,
    isCheckedStatic,
    setIsCheckedDynamic,
    isCheckedDynamic,
}) {
    const handleCheckboxStatic = () => {
        setIsCheckedStatic(!isCheckedStatic);
    };
    const handleCheckboxDynamic = () => {
        setIsCheckedDynamic(!isCheckedDynamic);
    };

    return (
        <div className="card p-4">
            <div className="card-header">
                Conditions Component
            </div>

            <div className="mt-4">
                <div className="form-check">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        checked={isCheckedStatic}
                        onChange={handleCheckboxStatic}
                        id="Static"
                    />
                    <label className="form-check-label" htmlFor="Static">
                        Static input
                    </label>
                </div>
                <div className="form-check">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        checked={isCheckedDynamic}
                        onChange={handleCheckboxDynamic}
                        id="Dynamic"
                    />
                    <label className="form-check-label" htmlFor="Dynamic">
                        Dynamic Input
                    </label>
                </div>
            </div>
        </div>
    );
}
