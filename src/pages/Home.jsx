import React, {useEffect} from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'
import {useNavigate} from 'react-router-dom'

import {useDispatch, useSelector} from 'react-redux'
import {deleteUser, loadUsers} from '../redux/actions'

function createData(name, calories, fat, carbs, protein) {
    return {name, calories, fat, carbs, protein}
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
]

const Home = () => {
    let dispatch = useDispatch()
    let navigate = useNavigate()

    const handelDelete = id => {
        if (window.confirm('Are you sure wanted to delete the user ?')) {
            dispatch(deleteUser(id))
        }
    }

    const {users} = useSelector(state => state.users)

    useEffect(() => {
        dispatch(loadUsers())
    }, [])

    return (
        <>
            <div>
                <Button variant="contained" onClick={() => navigate('/addUser')}>
                    Add User
                </Button>
            </div>

            <TableContainer component={Paper}>
                <Table sx={{minWidth: 650}} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Name</TableCell>
                            <TableCell align="center">Email</TableCell>
                            <TableCell align="center">Contact</TableCell>
                            <TableCell align="center">Address</TableCell>
                            <TableCell align="center">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users &&
                            users.map(user => (
                                <TableRow key={user.id} sx={{'&:last-child td, &:last-child th': {border: 0}}}>
                                    <TableCell component="th" scope="row" align="center">
                                        {user.name}
                                    </TableCell>
                                    <TableCell align="center">{user.email}</TableCell>
                                    <TableCell align="center">{user.phone}</TableCell>
                                    <TableCell align="center">{user.address.street}</TableCell>
                                    <TableCell align="center">
                                        <ButtonGroup disableElevation variant="contained">
                                            <Button
                                                style={{backgroundColor: 'red'}}
                                                color="secondary"
                                                onClick={() => handelDelete(user.id)}
                                            >
                                                Delete
                                            </Button>
                                            <Button>Edit</Button>
                                        </ButtonGroup>
                                    </TableCell>
                                </TableRow>
                            ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

export default Home
