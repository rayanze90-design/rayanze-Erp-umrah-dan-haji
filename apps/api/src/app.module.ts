import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { UsersModule } from './modules/users/users.module';
import { RolesModule } from './modules/roles/roles.module';
import { BranchesModule } from './modules/branches/branches.module';
import { CustomersModule } from './modules/customers/customers.module';
import { LeadsModule } from './modules/leads/leads.module';
import { JamaahModule } from './modules/jamaah/jamaah.module';
import { PackagesModule } from './modules/packages/packages.module';
import { CustomLaModule } from './modules/custom-la/custom-la.module';
import { ItineraryModule } from './modules/itinerary/itinerary.module';
import { VendorsModule } from './modules/vendors/vendors.module';
import { BookingsModule } from './modules/bookings/bookings.module';
import { DocumentsModule } from './modules/documents/documents.module';
import { VisasModule } from './modules/visas/visas.module';
import { FinanceModule } from './modules/finance/finance.module';
import { OperationsModule } from './modules/operations/operations.module';
import { ApprovalsModule } from './modules/approvals/approvals.module';
import { NotificationsModule } from './modules/notifications/notifications.module';
import { ReportsModule } from './modules/reports/reports.module';

@Module({
  imports: [
    AuthModule,
    DashboardModule,
    UsersModule,
    RolesModule,
    BranchesModule,
    CustomersModule,
    LeadsModule,
    JamaahModule,
    PackagesModule,
    CustomLaModule,
    ItineraryModule,
    VendorsModule,
    BookingsModule,
    DocumentsModule,
    VisasModule,
    FinanceModule,
    OperationsModule,
    ApprovalsModule,
    NotificationsModule,
    ReportsModule
  ]
})
export class AppModule {}
