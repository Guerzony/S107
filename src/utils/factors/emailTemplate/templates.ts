/* eslint-disable */
'use strict'
import { translate } from '../../../language'
const baseTemplate = require('./baseTemplate')
const ADDEQUIP = { logo: 'https://praticasharedfiles.s3.sa-east-1.amazonaws.com/images/email_templates/add-equip.png', alt: 'adicionar equipamento' }

/**
 * @description Return all base HTML content for an account activation.
 * @param {string} name User name that will receive this message
 */
export function userInvitationTemplate(name: string, email: string, id: number, code: string, lang: string) {
  const contentHtml =
    `<div>${translate('Olá', lang)}, ${name},<div><div>&nbsp;</div>` +
    `<div>${translate('Você foi convidado para acessar a Plataforma IOK, onde poderá gerenciar seus menus e equipamentos.', lang)}</div><div>&nbsp;</div>` +
    '<div><span style=\'background-color: transparent;\'>' +
    `<strong><a target='_blank' style='color: #004992; text-decoration: none;' href="${process.env.LINK_PSW}/resetPassword?email=${email}&code=${code}&id=${id}">${translate('Clique aqui', lang)}</a></strong></span>${translate('para concluir seu cadastro na plataforma.', lang)}<div>&nbsp;</div></div>` +
    `<div>${translate('Caso haja alguma dúvida, você pode responder este e-mail ou nos contatar através do telefone (35) 3449-1200, de segunda a sexta-feira em horário comercial.', lang)}</div><div>&nbsp;</div>` +
    `<div>&nbsp;</div><div>&nbsp;</div><div>${translate('Atenciosamente,', lang)}</div>` +
    `<div>${translate('Usere Prática', lang)}</div></div></div>`

  return baseTemplate.get(contentHtml, translate('Ativação de conta', lang))
}

/**
 * @description Return all base HTML content for a recovery password.
 * @param {string} name User name that will receive this message
 */
export function recoverPasswordTemplate(name: string, email: string, id: number, code: string, lang: string) {
  const contentHtml =
    `<div>${translate('Olá', lang)}, ${name},<div><div>&nbsp;</div>` +
    `<div>${translate('Recentemente você requisitou uma nova senha de acesso para a Plataforma IOK.', lang)}</div><div>&nbsp;</div>` +
    `<div>${translate('Para criar uma nova senha,', lang)}<strong><a target='_blank' style='color: #3c4858; text-decoration: none;' href="${process.env.LINK_PSW}/resetPassword?email=${email}&code=${code}&id=${id}">${translate('clique aqui.', lang)}</a></strong></span></div><div>&nbsp;</div>` +
    `<div>${translate('Caso você não tenha solicitado tal alteração, desconsidere este e-mail.', lang)}</div><div>&nbsp;</div>` +
    `<div>${translate('Caso haja alguma dúvida, você pode responder este e-mail ou nos contatar através do telefone (35) 3449-1200, de segunda a sexta-feira em horário comercial.', lang)}</div><div>&nbsp;</div>` +
    `<div>&nbsp;</div><div>&nbsp;</div><div>${translate('Atenciosamente,', lang)}</div>` +
    `<div>${translate('Usere Prática', lang)}</div></div></div>`

  return baseTemplate.get(contentHtml, translate('Redefinição de senha', lang))
}

/**
 * @description Return all base HTML content for an user convite.
 * @param {string} admName Adm name that will receive this message
 * @param {string} userName User requesting access
 * @param {string} userEmail User email that will be accepted or declined
 * @param {number} userId User id
 * @param {string} lang Admin language
 */
export function userAcceptanceByAdmTemplate(admName: string, userName: string, companyName: string, userEmail: string, userId: number, idCompany: number, code: string, lang: string) {
  const contentHtml =
    `<div>${translate('Olá', lang)}, ${admName}!<div><div>&nbsp;</div>` +
    `<div>${translate('O usuário', lang)} ${userName}, ${userEmail}, ${translate('solicitou acesso à sua rede. Caso você reconheça que', lang)} ${userName} ${translate('faça parte de sua entidade e, consequentemente tenha permissão para visualizar e utilizar suas receitas e menus,', lang)}</div>` +
    `<strong><a target='_blank' style='color: #3c4858; text-decoration: none;' href="${process.env.LINK_PSW}/activate/recover/user?email=${userEmail}&code=${code}&id=${userId}&idCompany=${idCompany}&companyName=${companyName}&userName=${userName}&typeUser=${'user'}">${translate('clique aqui para aceitá-lo.', lang)}</a></strong>` +
    `<div>&nbsp;</div><div>${translate('Mas se você não reconhece este usuário ou não deseja compartilhar seus dados de receitas com ele,', lang)}</div>` +
    `<strong><a target='_blank' style='color: #3c4858; text-decoration: none;' href="${process.env.LINK_PSW}/recuse/user?id=${userId}&userName=${userName}&companyName=${companyName}&email=${userEmail}">${translate('clique aqui para reportá-lo.', lang)}</a></strong>` +
    `<div>&nbsp;</div><div>${translate('Caso haja alguma dúvida, você pode responder este e-mail ou nos contatar através do telefone (35) 3449-1200, de segunda a sexta-feira em horário comercial.', lang)}</div><div>&nbsp;</div>` +
    `<div>&nbsp;</div><div>&nbsp;</div><div>${translate('Atenciosamente,', lang)}</div>` +
    `<div>${translate('Usere Prática', lang)}</div></div></div>`

  return baseTemplate.get(contentHtml, translate('Solicitação de acesso IOK', lang))
}

/**
 * @description Return all base HTML content for an user convite.
 * @param {string} companyName Company name 
 * @param {string} userName User requesting access
 * @param {string} userEmail User email that will be accepted or declined
 * @param {number} userId User id
 * @param {string} lang User language
 */
export function admRecoverAccountTemplate(name: string, companyName: string, email: string, id: number, idCompany: number, code: string, lang: string) {
  const contentHtml =
    `<div>${translate('Olá', lang)}, ${name},<div><div>&nbsp;</div>` +
    '<div><span style=\'background-color: transparent;\'>' +
    `<strong><a target='_blank' style='color: #004992; text-decoration: none;' href="${process.env.LINK_PSW}/activate/recover/user?email=${email}&code=${code}&id=${id}&idCompany=${idCompany}&companyName=${companyName}&userName=${name}&typeUser=${'adm'}">${translate('Clique aqui', lang)}</a></strong></span>${translate('para ativar sua conta de administrador na plataforma IOK.', lang)}<div>&nbsp;</div></div>` +
    `<div>&nbsp;</div><div>${translate('Caso haja alguma dúvida, você pode responder este e-mail ou nos contatar através do telefone (35) 3449-1200, de segunda a sexta-feira em horário comercial.', lang)}</div><div>&nbsp;</div>` +
    `<div>&nbsp;</div><div>&nbsp;</div><div>${translate('Atenciosamente,', lang)}</div>` +
    `<div>${translate('Usere Prática', lang)}</div></div></div>`

  return baseTemplate.get(contentHtml, translate('Ativação de conta', lang))
}

/**
 * @description Return all base HTML content for an user convite.
 * @param {string} userName User requesting access
 * @param {string} lang Admin language
 */
export function userNotificationTemplate(companyName: string, userName: string, lang: string) {
  const contentHtml =
    `<div>${translate('Olá', lang)}, ${userName}!<div><div>&nbsp;</div>` +
    `<div>${translate('O administrador da rede', lang)} ${companyName} ${translate('aceitou sua solicitação de acesso. Agora você faz parte da entidade e tem permissão para visualizar e utilizar suas receitas e menus.', lang)}</div>` +
    `<strong><a target='_blank' style='color: #3c4858; text-decoration: none;' href="${process.env.LINK_PSW}/login">${translate('Clique aqui', lang)}</a></strong></span>${translate('e faça seu login.', lang)}<div>&nbsp;</div></div>` +
    `<div>&nbsp;</div><div>${translate('Caso haja alguma dúvida, você pode responder este e-mail ou nos contatar através do telefone (35) 3449-1200, de segunda a sexta-feira em horário comercial.', lang)}</div><div>&nbsp;</div>` +
    `<div>&nbsp;</div><div>&nbsp;</div><div>${translate('Atenciosamente,', lang)}</div>` +
    `<div>${translate('Usere Prática', lang)}</div></div></div>`

  return baseTemplate.get(contentHtml, translate('Notificação de aceitação na companhia', lang))
}

/**
 * @description Return all base HTML content for an user convite.
 * @param {string} companyName Company name 
 * @param {string} userName User requesting access
 * @param {string} userEmail User email that will be accepted or declined
 * @param {number} userId User id
 * @param {string} lang User language
 */
export function admAccountActivationTemplate(name: string, email: string, id: number, code: string, lang: string) {
  const contentHtml =
    `<div>${translate('Olá', lang)}, ${name},<div><div>&nbsp;</div>` +
    '<div><span style=\'background-color: transparent;\'>' +
    `<strong><a target='_blank' style='color: #004992; text-decoration: none;' href="${process.env.LINK_PSW}/activate?email=${email}&code=${code}&id=${id}">${translate('Clique aqui', lang)}</a></strong></span>${translate('para ativar sua conta de administrador na plataforma IOK.', lang)}<div>&nbsp;</div></div>` +
    `<div>&nbsp;</div><div>${translate('Caso haja alguma dúvida, você pode responder este e-mail ou nos contatar através do telefone (35) 3449-1200, de segunda a sexta-feira em horário comercial.', lang)}</div><div>&nbsp;</div>` +
    `<div>&nbsp;</div><div>&nbsp;</div><div>${translate('Atenciosamente,', lang)}</div>` +
    `<div>${translate('Usere Prática', lang)}</div></div></div>`

  return baseTemplate.get(contentHtml, translate('Ativação de conta', lang))
}

/**
 * @description Return all base HTML content for an user convite.
 * @param {string} companyName Company name 
 * @param {string} userName User requesting access
 * @param {string} userEmail User email that will be accepted or declined
 * @param {number} userId User id
 * @param {string} lang User language
 */
export function userRecuserTemplate(name: string, companyName: string, lang: string) {
  const contentHtml =
    `<div>${translate('Olá', lang)}, ${name},<div><div>&nbsp;</div>` +
    '<div><span style=\'background-color: transparent;\'>' +
    `<div>${translate('O administrador da rede', lang)} ${companyName} ${translate('recusou sua solicitação de acesso e, por isso sua conta foi deletada.', lang)}</div>` +
    `<strong><a target='_blank' style='color: #3c4858; text-decoration: none;' href="${process.env.LINK_PSW}/login">${translate('Clique aqui', lang)}</a></strong></span>${translate('para criar sua conta novamente e certifique-se de que o nome da rede seja informado corretamente.', lang)}<div>&nbsp;</div></div>` +
    `<div>&nbsp;</div><div>${translate('Caso haja alguma dúvida, você pode responder este e-mail ou nos contatar através do telefone (35) 3449-1200, de segunda a sexta-feira em horário comercial.', lang)}</div><div>&nbsp;</div>` +
    `<div>&nbsp;</div><div>&nbsp;</div><div>${translate('Atenciosamente,', lang)}</div>` +
    `<div>${translate('Usere Prática', lang)}</div></div></div>`

  return baseTemplate.get(contentHtml, translate('Notificação de recusa', lang))
}
