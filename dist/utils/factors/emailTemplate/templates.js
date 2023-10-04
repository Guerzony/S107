/* eslint-disable */
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRecuserTemplate = exports.admAccountActivationTemplate = exports.userNotificationTemplate = exports.admRecoverAccountTemplate = exports.userAcceptanceByAdmTemplate = exports.recoverPasswordTemplate = exports.userInvitationTemplate = void 0;
const language_1 = require("../../../language");
const baseTemplate = require('./baseTemplate');
const ADDEQUIP = { logo: 'https://praticasharedfiles.s3.sa-east-1.amazonaws.com/images/email_templates/add-equip.png', alt: 'adicionar equipamento' };
/**
 * @description Return all base HTML content for an account activation.
 * @param {string} name User name that will receive this message
 */
function userInvitationTemplate(name, email, id, code, lang) {
    const contentHtml = `<div>${(0, language_1.translate)('Olá', lang)}, ${name},<div><div>&nbsp;</div>` +
        `<div>${(0, language_1.translate)('Você foi convidado para acessar a Plataforma IOK, onde poderá gerenciar seus menus e equipamentos.', lang)}</div><div>&nbsp;</div>` +
        '<div><span style=\'background-color: transparent;\'>' +
        `<strong><a target='_blank' style='color: #004992; text-decoration: none;' href="${process.env.LINK_PSW}/resetPassword?email=${email}&code=${code}&id=${id}">${(0, language_1.translate)('Clique aqui', lang)}</a></strong></span>${(0, language_1.translate)('para concluir seu cadastro na plataforma.', lang)}<div>&nbsp;</div></div>` +
        `<div>${(0, language_1.translate)('Caso haja alguma dúvida, você pode responder este e-mail ou nos contatar através do telefone (35) 3449-1200, de segunda a sexta-feira em horário comercial.', lang)}</div><div>&nbsp;</div>` +
        `<div>&nbsp;</div><div>&nbsp;</div><div>${(0, language_1.translate)('Atenciosamente,', lang)}</div>` +
        `<div>${(0, language_1.translate)('Usere Prática', lang)}</div></div></div>`;
    return baseTemplate.get(contentHtml, (0, language_1.translate)('Ativação de conta', lang));
}
exports.userInvitationTemplate = userInvitationTemplate;
/**
 * @description Return all base HTML content for a recovery password.
 * @param {string} name User name that will receive this message
 */
function recoverPasswordTemplate(name, email, id, code, lang) {
    const contentHtml = `<div>${(0, language_1.translate)('Olá', lang)}, ${name},<div><div>&nbsp;</div>` +
        `<div>${(0, language_1.translate)('Recentemente você requisitou uma nova senha de acesso para a Plataforma IOK.', lang)}</div><div>&nbsp;</div>` +
        `<div>${(0, language_1.translate)('Para criar uma nova senha,', lang)}<strong><a target='_blank' style='color: #3c4858; text-decoration: none;' href="${process.env.LINK_PSW}/resetPassword?email=${email}&code=${code}&id=${id}">${(0, language_1.translate)('clique aqui.', lang)}</a></strong></span></div><div>&nbsp;</div>` +
        `<div>${(0, language_1.translate)('Caso você não tenha solicitado tal alteração, desconsidere este e-mail.', lang)}</div><div>&nbsp;</div>` +
        `<div>${(0, language_1.translate)('Caso haja alguma dúvida, você pode responder este e-mail ou nos contatar através do telefone (35) 3449-1200, de segunda a sexta-feira em horário comercial.', lang)}</div><div>&nbsp;</div>` +
        `<div>&nbsp;</div><div>&nbsp;</div><div>${(0, language_1.translate)('Atenciosamente,', lang)}</div>` +
        `<div>${(0, language_1.translate)('Usere Prática', lang)}</div></div></div>`;
    return baseTemplate.get(contentHtml, (0, language_1.translate)('Redefinição de senha', lang));
}
exports.recoverPasswordTemplate = recoverPasswordTemplate;
/**
 * @description Return all base HTML content for an user convite.
 * @param {string} admName Adm name that will receive this message
 * @param {string} userName User requesting access
 * @param {string} userEmail User email that will be accepted or declined
 * @param {number} userId User id
 * @param {string} lang Admin language
 */
function userAcceptanceByAdmTemplate(admName, userName, companyName, userEmail, userId, idCompany, code, lang) {
    const contentHtml = `<div>${(0, language_1.translate)('Olá', lang)}, ${admName}!<div><div>&nbsp;</div>` +
        `<div>${(0, language_1.translate)('O usuário', lang)} ${userName}, ${userEmail}, ${(0, language_1.translate)('solicitou acesso à sua rede. Caso você reconheça que', lang)} ${userName} ${(0, language_1.translate)('faça parte de sua entidade e, consequentemente tenha permissão para visualizar e utilizar suas receitas e menus,', lang)}</div>` +
        `<strong><a target='_blank' style='color: #3c4858; text-decoration: none;' href="${process.env.LINK_PSW}/activate/recover/user?email=${userEmail}&code=${code}&id=${userId}&idCompany=${idCompany}&companyName=${companyName}&userName=${userName}&typeUser=${'user'}">${(0, language_1.translate)('clique aqui para aceitá-lo.', lang)}</a></strong>` +
        `<div>&nbsp;</div><div>${(0, language_1.translate)('Mas se você não reconhece este usuário ou não deseja compartilhar seus dados de receitas com ele,', lang)}</div>` +
        `<strong><a target='_blank' style='color: #3c4858; text-decoration: none;' href="${process.env.LINK_PSW}/recuse/user?id=${userId}&userName=${userName}&companyName=${companyName}&email=${userEmail}">${(0, language_1.translate)('clique aqui para reportá-lo.', lang)}</a></strong>` +
        `<div>&nbsp;</div><div>${(0, language_1.translate)('Caso haja alguma dúvida, você pode responder este e-mail ou nos contatar através do telefone (35) 3449-1200, de segunda a sexta-feira em horário comercial.', lang)}</div><div>&nbsp;</div>` +
        `<div>&nbsp;</div><div>&nbsp;</div><div>${(0, language_1.translate)('Atenciosamente,', lang)}</div>` +
        `<div>${(0, language_1.translate)('Usere Prática', lang)}</div></div></div>`;
    return baseTemplate.get(contentHtml, (0, language_1.translate)('Solicitação de acesso IOK', lang));
}
exports.userAcceptanceByAdmTemplate = userAcceptanceByAdmTemplate;
/**
 * @description Return all base HTML content for an user convite.
 * @param {string} companyName Company name
 * @param {string} userName User requesting access
 * @param {string} userEmail User email that will be accepted or declined
 * @param {number} userId User id
 * @param {string} lang User language
 */
function admRecoverAccountTemplate(name, companyName, email, id, idCompany, code, lang) {
    const contentHtml = `<div>${(0, language_1.translate)('Olá', lang)}, ${name},<div><div>&nbsp;</div>` +
        '<div><span style=\'background-color: transparent;\'>' +
        `<strong><a target='_blank' style='color: #004992; text-decoration: none;' href="${process.env.LINK_PSW}/activate/recover/user?email=${email}&code=${code}&id=${id}&idCompany=${idCompany}&companyName=${companyName}&userName=${name}&typeUser=${'adm'}">${(0, language_1.translate)('Clique aqui', lang)}</a></strong></span>${(0, language_1.translate)('para ativar sua conta de administrador na plataforma IOK.', lang)}<div>&nbsp;</div></div>` +
        `<div>&nbsp;</div><div>${(0, language_1.translate)('Caso haja alguma dúvida, você pode responder este e-mail ou nos contatar através do telefone (35) 3449-1200, de segunda a sexta-feira em horário comercial.', lang)}</div><div>&nbsp;</div>` +
        `<div>&nbsp;</div><div>&nbsp;</div><div>${(0, language_1.translate)('Atenciosamente,', lang)}</div>` +
        `<div>${(0, language_1.translate)('Usere Prática', lang)}</div></div></div>`;
    return baseTemplate.get(contentHtml, (0, language_1.translate)('Ativação de conta', lang));
}
exports.admRecoverAccountTemplate = admRecoverAccountTemplate;
/**
 * @description Return all base HTML content for an user convite.
 * @param {string} userName User requesting access
 * @param {string} lang Admin language
 */
function userNotificationTemplate(companyName, userName, lang) {
    const contentHtml = `<div>${(0, language_1.translate)('Olá', lang)}, ${userName}!<div><div>&nbsp;</div>` +
        `<div>${(0, language_1.translate)('O administrador da rede', lang)} ${companyName} ${(0, language_1.translate)('aceitou sua solicitação de acesso. Agora você faz parte da entidade e tem permissão para visualizar e utilizar suas receitas e menus.', lang)}</div>` +
        `<strong><a target='_blank' style='color: #3c4858; text-decoration: none;' href="${process.env.LINK_PSW}/login">${(0, language_1.translate)('Clique aqui', lang)}</a></strong></span>${(0, language_1.translate)('e faça seu login.', lang)}<div>&nbsp;</div></div>` +
        `<div>&nbsp;</div><div>${(0, language_1.translate)('Caso haja alguma dúvida, você pode responder este e-mail ou nos contatar através do telefone (35) 3449-1200, de segunda a sexta-feira em horário comercial.', lang)}</div><div>&nbsp;</div>` +
        `<div>&nbsp;</div><div>&nbsp;</div><div>${(0, language_1.translate)('Atenciosamente,', lang)}</div>` +
        `<div>${(0, language_1.translate)('Usere Prática', lang)}</div></div></div>`;
    return baseTemplate.get(contentHtml, (0, language_1.translate)('Notificação de aceitação na companhia', lang));
}
exports.userNotificationTemplate = userNotificationTemplate;
/**
 * @description Return all base HTML content for an user convite.
 * @param {string} companyName Company name
 * @param {string} userName User requesting access
 * @param {string} userEmail User email that will be accepted or declined
 * @param {number} userId User id
 * @param {string} lang User language
 */
function admAccountActivationTemplate(name, email, id, code, lang) {
    const contentHtml = `<div>${(0, language_1.translate)('Olá', lang)}, ${name},<div><div>&nbsp;</div>` +
        '<div><span style=\'background-color: transparent;\'>' +
        `<strong><a target='_blank' style='color: #004992; text-decoration: none;' href="${process.env.LINK_PSW}/activate?email=${email}&code=${code}&id=${id}">${(0, language_1.translate)('Clique aqui', lang)}</a></strong></span>${(0, language_1.translate)('para ativar sua conta de administrador na plataforma IOK.', lang)}<div>&nbsp;</div></div>` +
        `<div>&nbsp;</div><div>${(0, language_1.translate)('Caso haja alguma dúvida, você pode responder este e-mail ou nos contatar através do telefone (35) 3449-1200, de segunda a sexta-feira em horário comercial.', lang)}</div><div>&nbsp;</div>` +
        `<div>&nbsp;</div><div>&nbsp;</div><div>${(0, language_1.translate)('Atenciosamente,', lang)}</div>` +
        `<div>${(0, language_1.translate)('Usere Prática', lang)}</div></div></div>`;
    return baseTemplate.get(contentHtml, (0, language_1.translate)('Ativação de conta', lang));
}
exports.admAccountActivationTemplate = admAccountActivationTemplate;
/**
 * @description Return all base HTML content for an user convite.
 * @param {string} companyName Company name
 * @param {string} userName User requesting access
 * @param {string} userEmail User email that will be accepted or declined
 * @param {number} userId User id
 * @param {string} lang User language
 */
function userRecuserTemplate(name, companyName, lang) {
    const contentHtml = `<div>${(0, language_1.translate)('Olá', lang)}, ${name},<div><div>&nbsp;</div>` +
        '<div><span style=\'background-color: transparent;\'>' +
        `<div>${(0, language_1.translate)('O administrador da rede', lang)} ${companyName} ${(0, language_1.translate)('recusou sua solicitação de acesso e, por isso sua conta foi deletada.', lang)}</div>` +
        `<strong><a target='_blank' style='color: #3c4858; text-decoration: none;' href="${process.env.LINK_PSW}/login">${(0, language_1.translate)('Clique aqui', lang)}</a></strong></span>${(0, language_1.translate)('para criar sua conta novamente e certifique-se de que o nome da rede seja informado corretamente.', lang)}<div>&nbsp;</div></div>` +
        `<div>&nbsp;</div><div>${(0, language_1.translate)('Caso haja alguma dúvida, você pode responder este e-mail ou nos contatar através do telefone (35) 3449-1200, de segunda a sexta-feira em horário comercial.', lang)}</div><div>&nbsp;</div>` +
        `<div>&nbsp;</div><div>&nbsp;</div><div>${(0, language_1.translate)('Atenciosamente,', lang)}</div>` +
        `<div>${(0, language_1.translate)('Usere Prática', lang)}</div></div></div>`;
    return baseTemplate.get(contentHtml, (0, language_1.translate)('Notificação de recusa', lang));
}
exports.userRecuserTemplate = userRecuserTemplate;
