import { SwaggerRouter } from 'koa-swagger-decorator';
import AuthRouter from './routes/auth.routes';
import EmployeeRouter from './routes/employee.routes';
import CustomerRouter from './routes/customer.routes';
import PackageRouter from './routes/package.routes';
import PackageAddOnsRouter from './routes/package.addOns.routes';
import ServiceRouter from './routes/service.routes';
import AddOnCategoryRouter from './routes/addOn.category.routes';
import AdminRouter from './routes/admin.routes';
import AddOnRouter from './routes/addOn.routes';
import TimeslotRouter from './routes/timeslot.routes';
import BookingRouter from './routes/booking.routes';
import VehicleRouter from './routes/vehicle.routes';
import CustomerServiceRouter from './routes/customer.service.routes';
import CouponRouter from './routes/coupon.routes';
import SMSConversationRouter from './routes/sms.conversation.routes';
import AgentRouter from './routes/agent.routes';

const router: any = new SwaggerRouter({ prefix: '/api' });

AdminRouter.definingPackageRoutes(router);
AuthRouter.definingAuthRoutes(router);
EmployeeRouter.definingEmployeeRoutes(router);
CustomerRouter.definingCustomerRoutes(router);
PackageRouter.definingPackageRoutes(router);
PackageAddOnsRouter.definingPackageAddOnsRoutes(router);
ServiceRouter.definingServiceRoutes(router);
AddOnRouter.definingAddOnRoutes(router);
AddOnCategoryRouter.definingAddOnCategoryRoutes(router);
TimeslotRouter.definingTimeslotRoutes(router);
BookingRouter.definingBookingRoutes(router);
VehicleRouter.definingVehicleRoutes(router);
CustomerServiceRouter.definingCustomerServiceRoutes(router);
CouponRouter.definingCouponRoutes(router);
SMSConversationRouter.definingSMSConversationRoutes(router);
AgentRouter.definingAgentRoutes(router);
// Swagger endpoint
router.swagger({
  title: 'BU Mobile Detailing API',
  version: '1.0.0',
  prefix: '/api',
  swaggerHtmlEndpoint: '/swagger-html',
});

router.mapDir(__dirname);

export { router };
