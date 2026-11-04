import { Component } from '@angular/core';
import { Resume } from '../../interfaces/resume';
import { ResumeHero01 } from '../../components/resume-hero/resume-hero01/resume-hero01';
import { ResumeContacts01 } from '../../components/resume-contacts/resume-contacts01/resume-contacts01';
import { ResumeExperiences01 } from '../../components/resume-experiences/resume-experiences01/resume-experiences01';
import { ResumeAbout01 } from '../../components/resume-about/resume-about01/resume-about01';
import { ResumeSkills01 } from '../../components/resume-skills/resume-skills01/resume-skills01';
import { ResumeCourses01 } from '../../components/resume-courses/resume-courses01/resume-courses01';
import { LucideAngularModule } from 'lucide-angular';

@Component({
	selector: 'app-janeriwamoto',
	imports: [
		ResumeHero01,
		ResumeContacts01,
		ResumeExperiences01,
		ResumeAbout01,
		ResumeSkills01,
		ResumeCourses01,
		LucideAngularModule,
	],
	templateUrl: './janeriwamoto.html',
	styleUrl: './janeriwamoto.scss',
})
export class JaneRIwamoto {
	public localize = $localize;

	public hero: Resume['hero'] = {
		name: $localize`:@@janeriwamoto_hero_name: Jane Iwamoto`,
		role: $localize`:@@janeriwamoto_hero_role: Analista de Operações`,
	};
	public contacts: Resume['contact'] = [
		{ icon: 'map-pin', description: 'Curitiba/PR' },
		{ icon: 'mail', description: 'rangeljanekelly@gmail.com' },
		{ icon: 'phone', description: '(41) 9.9896-1453' },
	];
	// public about: Resume['about'] = {
	// 	summary: $localize`:@@janeriwamoto_about_summary: Desenvolvedor Full-Stack Sênior com 9+ anos de experiência, especializado em Frontend com Angular 2+ e ReactJS. Expertise na criação de Design Systems escaláveis, migração de legados, otimização de performance e implementação de testes automatizados. Sólidos conhecimentos em TypeScript, RxJS, Redux, Node.js e práticas de Clean Code/SOLID. Histórico comprovado de liderança técnica, mentoria de equipes e entrega de soluções complexas em ambientes ágeis.`,
	// };
	public languages: Resume['skills'] = [
		{
			name: $localize`:@@janeriwamoto_languages_portuguese: Português`,
			level: 10,
		},
		{
			name: $localize`:@@janeriwamoto_languages_english: Inglês`,
			level: 2,
		},
	];
	public courses: Resume['courses'] = [
		{
			institution: 'Uniandrade',
			name: $localize`:@@janeriwamoto_courses_marketing: Marketing`,
			timeSpent: $localize`:@@janeriwamoto_courses_time_spent_completed: completo`,
		},
		{
			institution: 'Unicesumar',
			name: $localize`:@@janeriwamoto_courses_fashion_design: Design de moda`,
			timeSpent: $localize`:@@janeriwamoto_courses_time_spent_completed: completo`,
		},
	];
	public computing: Resume['skills'] = [
		{ name: 'Excel', level: 5 },
		{ name: 'Word', level: 6 },
		{ name: $localize`:@@janeriwamoto_computing_typing: Digitação`, level: 7 },
		{ name: 'HTML/CSS', level: 2 },
	];
	public professional: Resume['skills'] = [
		{ name: $localize`:@@janeriwamoto_professional_communication: Comunicação`, level: 7 },
		{ name: $localize`:@@janeriwamoto_professional_leadership: Liderança`, level: 6 },
		{ name: $localize`:@@janeriwamoto_professional_teamwork: Trabalho em equipe`, level: 7 },
		{ name: $localize`:@@janeriwamoto_professional_time_management: Organização do tempo`, level: 9 },
	];
	public experiencesOriginal: Resume['experiences'] = [
		{
			company: 'Lojacorr',
			startedAt: $localize`:@@janeriwamoto_experiences_lojacorr_started_at: SET 2021`,
			endedAt: $localize`:@@janeriwamoto_experiences_lojacorr_ended_at: NOV 2023`,
			description: $localize`:@@janeriwamoto_experiences_original_description_lojacorr: Notificação de parcelas, auxílio a corretores, contato com clientes, negociação e resolução de chamados.`,
		},
		{
			company: 'Mercado Bonfim',
			startedAt: $localize`:@@janeriwamoto_experiences_bonfim_started_at: SET 2018`,
			endedAt: $localize`:@@janeriwamoto_experiences_bonfim_ended_at: DEZ 2020`,
			description: $localize`:@@janeriwamoto_experiences_original_description_bonfim: Atendimento ao cliente, reposição de mercadorias e fechamento de caixa.`,
		},
		{
			company: 'FACIAP',
			startedAt: $localize`:@@janeriwamoto_experiences_faciap_started_at: ABR 2014`,
			endedAt: $localize`:@@janeriwamoto_experiences_faciap_ended_at: JUL 2017`,
			description: $localize`:@@janeriwamoto_experiences_original_description_faciap: Auxílio ao setor de RH, auxílio ao setor administrativo, controle de correspondência e atendimento telefônico.`,
		},
		{
			company: 'ASSEMP',
			startedAt: $localize`:@@janeriwamoto_experiences_assemp_started_at: JAN 2013`,
			endedAt: $localize`:@@janeriwamoto_experiences_assemp_ended_at: FEV 2014`,
			description: $localize`:@@janeriwamoto_experiences_original_description_assemp: Pagamento de contas, acerto de viagens, organização de agendas e atendimento telefônico.`,
		},
	];
	public experiences: Resume['experiences'] = [
		{
			...this.experiencesOriginal[0],
			description: $localize`:@@janeriwamoto_experiences_description_lojacorr: Atuação no suporte a corretores e no atendimento a clientes, com envio de notificações de parcelas e condução de negociações. Atendimento e resolução de chamados, auxiliando no esclarecimento de dúvidas e no encaminhamento das demandas operacionais.`,
		},
		{
			...this.experiencesOriginal[1],
			description: $localize`:@@janeriwamoto_experiences_description_bonfim: Atendimento ao cliente e apoio às rotinas de loja, com reposição de mercadorias para manter os produtos disponíveis ao público. Realização do fechamento de caixa, contribuindo para a organização das atividades diárias do estabelecimento.`,
		},
		{
			...this.experiencesOriginal[2],
			description: $localize`:@@janeriwamoto_experiences_description_faciap: Apoio às rotinas dos setores de Recursos Humanos e Administrativo, auxiliando no atendimento às demandas internas. Controle de correspondências e atendimento telefônico, com recebimento e encaminhamento de informações aos responsáveis.`,
		},
		{
			...this.experiencesOriginal[3],
			description: $localize`:@@janeriwamoto_experiences_description_assemp: Atuação nas rotinas administrativas, com pagamento de contas, acerto de despesas de viagens e organização de agendas. Atendimento telefônico e apoio à comunicação cotidiana, contribuindo para a organização dos compromissos e das demandas do setor.`,
		},
	];
}
