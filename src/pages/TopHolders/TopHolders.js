import * as React from "react";
import { useEffect, useState } from "react";

import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";

import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";
import { TableHead, Typography } from "@mui/material";

import { fetchTopHolders } from "../../store/actions/fetchTopholdersAction";
import Error from "../../Components/Error/Error";

function TablePaginationActions(props) {
	const theme = useTheme();
	const { count, page, rowsPerPage, onPageChange } = props;

	const handleFirstPageButtonClick = (event) => {
		onPageChange(event, 0);
	};

	const handleBackButtonClick = (event) => {
		onPageChange(event, page - 1);
	};

	const handleNextButtonClick = (event) => {
		onPageChange(event, page + 1);
	};

	const handleLastPageButtonClick = (event) => {
		onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
	};

	return (
		<Box sx={{ flexShrink: 0, ml: 2.5 }}>
			<IconButton
				onClick={handleFirstPageButtonClick}
				disabled={page === 0}
				aria-label="first page"
			>
				{theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
			</IconButton>
			<IconButton
				onClick={handleBackButtonClick}
				disabled={page === 0}
				aria-label="previous page"
			>
				{theme.direction === "rtl" ? (
					<KeyboardArrowRight />
				) : (
					<KeyboardArrowLeft />
				)}
			</IconButton>
			<IconButton
				onClick={handleNextButtonClick}
				disabled={page >= Math.ceil(count / rowsPerPage) - 1}
				aria-label="next page"
			>
				{theme.direction === "rtl" ? (
					<KeyboardArrowLeft />
				) : (
					<KeyboardArrowRight />
				)}
			</IconButton>
			<IconButton
				onClick={handleLastPageButtonClick}
				disabled={page >= Math.ceil(count / rowsPerPage) - 1}
				aria-label="last page"
			>
				{theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
			</IconButton>
		</Box>
	);
}

TablePaginationActions.propTypes = {
	count: PropTypes.number.isRequired,
	onPageChange: PropTypes.func.isRequired,
	page: PropTypes.number.isRequired,
	rowsPerPage: PropTypes.number.isRequired,
};

export default function TopHolders() {
	const [page, setPage] = React.useState(0);
	const [rowsPerPage, setRowsPerPage] = React.useState(10);
	// const [topHolderList, setTopHolderList] = useState([]);
	const [error, setError] = useState(false);
	const [isLoading, setIsLoading] = useState(true);
	const dispatch = useDispatch();

	const topHolderList = useSelector(
		(state) => state.fetchTopHolderReducer.topHolders || [],
	);

	useEffect(() => {
		dispatch(fetchTopHolders);
	}, [dispatch]);

	// Avoid a layout jump when reaching the last page with empty rows.
	const emptyRows =
		page > 0 ? Math.max(0, (1 + page) * rowsPerPage - topHolderList.length) : 0;

	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (event) => {
		setRowsPerPage(parseInt(event.target.value, 10));
		setPage(0);
	};

	return (
		<>
			{isLoading && <h1>loading</h1>}
			<Box sx={{ border: 1, margin: 3, maxWidth: 800 }}>
				<Typography variant="h5" color="initial">
					List of top 1000 Zenzo holder address
				</Typography>
				<TableContainer component={Paper}>
					<Table sx={{ maxWidth: 800 }} aria-label="custom pagination table">
						<TableHead>
							<TableRow>
								<TableCell
									sx={{ borderRight: "2px solid #d3d3d3" }}
									align="center"
								>
									Rank
								</TableCell>
								<TableCell
									sx={{ borderRight: "2px solid #d3d3d3" }}
									align="center"
								>
									Address
								</TableCell>
								<TableCell align="center">Amount</TableCell>
							</TableRow>
						</TableHead>
						{error && <Error />}
						<TableBody>
							{(rowsPerPage > 0
								? topHolderList.slice(
										page * rowsPerPage,
										page * rowsPerPage + rowsPerPage,
								  )
								: topHolderList
							).map((row, index) => (
								<TableRow key={row.addr}>
									<TableCell
										sx={{ borderRight: "2px solid #d3d3d3" }}
										component="th"
										scope="row"
										align="center"
									>
										{index + 1}
									</TableCell>
									<TableCell
										sx={{ borderRight: "2px solid #d3d3d3" }}
										component="th"
										scope="row"
										align="center"
									>
										{row.addr}
									</TableCell>

									<TableCell style={{ width: 160 }} align="center">
										{row.amount}
									</TableCell>
								</TableRow>
							))}

							{emptyRows > 0 && (
								<TableRow style={{ height: 53 * emptyRows }}>
									<TableCell colSpan={6} />
								</TableRow>
							)}
						</TableBody>
						<TableFooter>
							<TableRow>
								<TablePagination
									rowsPerPageOptions={[10, 20, 30, { label: "All", value: -1 }]}
									colSpan={3}
									count={topHolderList.length}
									rowsPerPage={rowsPerPage}
									page={page}
									SelectProps={{
										inputProps: {
											"aria-label": "rows per page",
										},
										native: true,
									}}
									onPageChange={handleChangePage}
									onRowsPerPageChange={handleChangeRowsPerPage}
									ActionsComponent={TablePaginationActions}
								/>
							</TableRow>
						</TableFooter>
					</Table>
				</TableContainer>
			</Box>
		</>
	);
}
