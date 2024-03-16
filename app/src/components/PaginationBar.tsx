import Link from "next/link";

interface PaginationBarProps {
    currentPage: number;
    totalPages: number;
}


export default function PaginationBar({currentPage, totalPages}: PaginationBarProps) {
    const maxPage = Math.min(totalPages, Math.max(currentPage + 4, 10));
    const minPage = Math.max(1, Math.min(currentPage - 5, maxPage - 9));
    const numberedPageItems: JSX.Element[] = []

    for (let page = minPage; page <= maxPage; page++) {
        numberedPageItems.push(
            <Link
                href={"?page=" + page}
                key={page}
                className={`join-item btn ${currentPage === page ? "btn-active pointer-events-none" : ""}`}
            >
                {page}
            </Link>
        )
    }

    return (
        <>
            <div className={'join hidden sm:block'}>
                {numberedPageItems}
            </div>
            <div className={'join block sm:hidden'}>
                {currentPage > 1 &&
                    <Link href={"?page=" + (currentPage - 1)}
                          className={'btn join-item'}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor"
                             className="bi bi-arrow-left" viewBox="0 0 16 16">
                            <path fillRule="evenodd"
                                  d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
                        </svg>
                    </Link>
                }
                <button className={'join-item btn pointer-events-none'}>
                    Page {currentPage}
                </button>

                {
                    currentPage < totalPages && (
                        <Link href={"?page=" + (currentPage + 1)}
                              className={'btn join-item'}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor"
                                 className="bi bi-arrow-right" viewBox="0 0 16 16">
                                <path fillRule="evenodd"
                                      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                            </svg>
                        </Link>
                    )
                }

            </div>
        </>
    )
}