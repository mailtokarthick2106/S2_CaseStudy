export class AppConfig {

    static getConfig(): any {
        return {
            'api': {
                'getOutreachEvents': '/outreachmanagementapi/outreach/events',
                'getEventFeedbackDetails': '/outreachmanagementapi/outreach/feedbackdetails',
                'validateUserCredentials': '/login',
                'createNewUser': '/Auth-Service/users/sign-up'
            }
        }
    }
}