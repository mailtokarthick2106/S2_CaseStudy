export class AppConfig {

    static getConfig(): any {
        return {
            'api': {
                'getOutreachEvents': '/outreach/outreachmanagementapi/mainevents/events',
                'getEventFeedbackDetails': '/outreach/outreachmanagementapi/feedbackdetails',
                'validateUserCredentials': '/outreach/Auth-Service/oauth/token',
                'createNewUser': '/outreach/Auth-Service/users/sign-up'
            }
        }
    }
}