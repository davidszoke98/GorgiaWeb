import React, { useEffect, useState } from 'react'
import BookService from '../Network/BookService.js';
import StudentsService from '../Network/StudentsService.js';
import Pagination from "react-js-pagination";
import 'bootstrap/dist/css/bootstrap.min.css';


export default function StatisticsPage() {
    const [books, setBooks] = useState([]);
    const [students, setStudents] = useState({ list: [] });
    const [loading, setLoading] = useState(true);
    const [activePage, setActivePage] = useState(1);

    useEffect(() => {
        getBooks();
        getStudentInfo(1);
    }, [])


    const getBooks = () => {
        BookService.getAllBooks().then(x => {
            setBooks(x);
        })
    }
    const getStudentInfo = (page) => {
        setLoading(true);
        StudentsService.getInfo(page - 1).then(x => {
            console.log(x)
            setStudents(x);
            setLoading(false);
        })
    }

    const getBooksBorrowed = () => {
        var booksBorrowed = books.filter(x => x.availableBooksNumber < x.copiesNumber);
        var borrowedCount = 0;
        booksBorrowed.forEach(x => {
            borrowedCount += x.copiesNumber - x.availableBooksNumber;
        })
        return borrowedCount;
    }

    const getTotalBooksCount = () => {
        var count = 0;
        books.forEach(x => {
            count += x.copiesNumber;
        })
        return count;
    }

    const handlePageChange = (newPage) => {
        setActivePage(newPage);
        getStudentInfo(newPage);
    }

    const bookTypes = books.length;
    const bookCount = getTotalBooksCount();
    const booksBorrowedCount = getBooksBorrowed();
    const booksAvailableCount = bookCount - booksBorrowedCount;
    return (
        <div style={{ height: '100vh', width: 'calc(100vw)', display: "flex", justifyContent: "center", alignItems: "center", flexDirection: 'column' }}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end', flex: 1, width: '100%' }}>
                {/* <Logo> */}
                <img height='80%' src={require('../Assets/georgialogo.png')}></img>
                {/* </Logo> */}
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', flex: 5, width: '100%' }}>
                <h2>Statistics</h2>
                <div style={{ flex: 1, width: '100%', display: 'flex' }}>
                    <div style={{ flex: 1, backgroundColor: '#F1F1F1', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', padding: 10 }}>
                        <h1 style={{ textDecoration: 'underline' }}>Books</h1>
                        <h2 style={{ fontSize: 24 }}>Book titles: {bookTypes}</h2>
                        <h2 style={{ fontSize: 24 }}>Books total: {bookCount}</h2>
                        <h2 style={{ fontSize: 24 }}>Books borrowed: {booksBorrowedCount}</h2>
                        <h2 style={{ fontSize: 24 }}>Books available: {booksAvailableCount}</h2>
                    </div>
                    <div style={{ flex: 1, background: '#67C2E8', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', padding: 10 }}>
                        <h1 style={{ textDecoration: 'underline' }}>Students</h1>
                        {
                            loading ?
                                <>
                                    <div style={{ height: '50vh', overflowY: 'scroll', width: 500, backgroundColor: 'white' }}>
                                        <div style={{ width: 500, height: 50, backgroundColor: '#595959', color: 'white', position: 'fixed', display: 'flex', alignItems: 'center', paddingLeft: 10, paddingRight: 10, justifyContent: 'space-between' }}>
                                            <h2 style={{ fontSize: 16, margin: 0 }}>Name{students.list.length>0?` ${students.list[0].firstName[0]} - ${students.list[students.list.length-1].firstName[0]}`:''}</h2>
                                            <h2 style={{ fontSize: 16, margin: 0 }}>Card number</h2>
                                        </div>
                                        <div style={{ width: "100%", height: 50, display: 'flex', alignItems: 'center', paddingLeft: 10, paddingRight: 10, justifyContent: 'space-between' }}>
                                        </div>
                                        <div style={{display: 'flex',height:'calc(50vh - 50px)',width:'100%', justifyContent: 'center', alignItems: 'center'}} >
                                            <div class="spinner-border" role="status">
                                                <span class="sr-only">Loading...</span>
                                            </div>
                                        </div>
                                        

                                    </div>
                                    <Pagination
                                        disabled
                                        activePage={activePage}
                                        itemsCountPerPage={students?.pageSize || 10}
                                        totalItemsCount={students?.allCount || 1000}
                                        pageRangeDisplayed={10}
                                        onChange={handlePageChange}
                                        itemClass="page-item"
                                        linkClass="page-link"
                                    />
                                </> :
                                <>
                                    <div style={{ height: '50vh', overflowY: 'scroll', width: 500 }}>
                                        <div style={{ width: 500, height: 50, backgroundColor: '#595959', color: 'white', position: 'fixed', display: 'flex', alignItems: 'center', paddingLeft: 10, paddingRight: 10, justifyContent: 'space-between' }}>
                                            <h2 style={{ fontSize: 16, margin: 0 }}>Name{students.list.length>0?` ${students.list[0].firstName[0]} - ${students.list[students.list.length-1].firstName[0]}`:''}</h2>
                                            <h2 style={{ fontSize: 16, margin: 0 }}>Card number</h2>
                                        </div>
                                        <div style={{ width: "100%", height: 50, display: 'flex', alignItems: 'center', paddingLeft: 10, paddingRight: 10, justifyContent: 'space-between' }}>
                                        </div>
                                        {students.list.map((student, index) => {
                                            return <div key={student.cardNumberId} style={{ width: 500, height: 50, backgroundColor: index % 2 == 0 ? 'white' : '#F1F1F1', display: 'flex', alignItems: 'center', paddingLeft: 10, paddingRight: 10, justifyContent: 'space-between' }}>
                                                <h2 style={{ fontSize: 16, margin: 0 }}>{student.firstName}{student.middleName ? ` ${student.middleName} ` : ' '}{student.lastName}</h2>
                                                <h2 style={{ fontSize: 16, margin: 0 }}>{student.cardNumberId}</h2>
                                            </div>
                                        })}
                                    </div>
                                    <Pagination
                                        activePage={activePage}
                                        itemsCountPerPage={students?.pageSize || 10}
                                        totalItemsCount={students?.allCount || 1000}
                                        pageRangeDisplayed={10}
                                        onChange={handlePageChange}
                                        itemClass="page-item"
                                        linkClass="page-link"
                                    />
                                </>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
