import { companies } from "./getData";

export function getCompany(companyId) {
    return companies.find(company => {
        if (company.id === companyId) {
            return company;
        }
   });
}
