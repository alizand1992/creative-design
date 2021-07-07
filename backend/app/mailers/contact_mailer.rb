class ContactMailer < ApplicationMailer
  default from: 'hire.creative.design@gmail.com'

  def contact_email
    @name = params['name']
    @company_name = params['company_name']
    @email = params['email']
    @project = params['project']

    mail(to: 'hire.creative.design@gmail.com', subject: "Contact Us: #{@company_name} - #{@name}")
  end
end
