import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../contexts/authContext';
import Loading from '../layouts/Loading/Loading';

function ProtectedRoute({ children, navigateTo = '/' }) {
	const { user, loading } = useAuth();

	if (loading) return <Loading />;
	if (!user) return <Navigate to={navigateTo} />;

	return children ?? <Outlet />;
}

export { ProtectedRoute };
