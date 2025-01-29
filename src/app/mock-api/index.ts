import { AuthMockApi } from './common/auth/api';
import { NavigationMockApi } from './common/navigation/api';
import { ProjectMockApi } from './dashboards/project/api';
import { UserMockApi } from './common/user/api';

export const mockApiServices = [
    AuthMockApi,
    NavigationMockApi,
    ProjectMockApi,
    UserMockApi
];
