export default function SectionWrap({ children }) {
    return (
        <>
            <div className="section_wrapper rounded-xl sm:shadow-lg sm:max-w-full px-2 py-3 sm:px-12 sm:py-6 sm:overflow-auto">
                {children}
            </div>
            <style jsx>{`
                .section_wrapper {
                    font-family: "";
                    display: flex;
                    flex-direction: column;
                    background-color: #eccece;
                    min-width: 100%;
                }
            `}</style>
        </>
    )
}