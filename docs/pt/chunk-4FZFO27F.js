import { a as I, b as R, c as y, d as C, e as h } from './chunk-K6VIZ7FM.js';
import {
	$a as b,
	Aa as s,
	Ba as n,
	Ca as a,
	Da as r,
	Ea as A,
	Fa as w,
	Ja as _,
	La as t,
	Ma as z,
	Na as $,
	Ta as o,
	Ua as E,
	Xa as T,
	ab as P,
	ha as e,
	pa as f,
} from './chunk-HPM24GUC.js';
var g = class m {
	about = T();
	static ɵfac = function (c) {
		return new (c || m)();
	};
	static ɵcmp = f({
		type: m,
		selectors: [['resume-about01']],
		inputs: { about: [1, 'about'] },
		decls: 3,
		vars: 6,
		template: function (c, l) {
			if ((c & 1 && (A(0, 'div')(1, 'span'), z(2), w()()), c & 2)) {
				let i,
					u = 'resume_about01';
				(t(u), e(), t(o('', u, '__summary')), e(), $((i = l.about()) == null ? null : i.summary));
			}
		},
		styles: [
			'.resume_about01__summary[_ngcontent-%COMP%]{font-size:12px;font-weight:300;letter-spacing:initial;line-height:initial;color:var(--grey7);display:block}',
		],
	});
};
var O = class m {
	localize = $localize;
	hero = { name: ' Felipe Iwamoto', role: ' Desenvolvedor Full-Stack S\xEAnior' };
	contacts = [
		{ icon: 'map-pin', description: 'Brazil - Curitiba/PR' },
		{ icon: 'mail', description: 'felipe.t.iwamoto@gmail.com' },
		{ icon: 'phone', description: '(11) 9.8455-6053' },
		{ icon: 'external-link', description: `felipetiwamoto.github.io/cv/${this.localize.locale}` },
	];
	about = {
		summary:
			' Desenvolvedor Full-Stack S\xEAnior com 9+ anos de experi\xEAncia, especializado em Frontend com Angular 2+ e ReactJS. Expertise na cria\xE7\xE3o de Design Systems escal\xE1veis, migra\xE7\xE3o de legados, otimiza\xE7\xE3o de performance e implementa\xE7\xE3o de testes automatizados. S\xF3lidos conhecimentos em TypeScript, RxJS, Redux, Node.js e pr\xE1ticas de Clean Code/SOLID. Hist\xF3rico comprovado de lideran\xE7a t\xE9cnica, mentoria de equipes e entrega de solu\xE7\xF5es complexas em ambientes \xE1geis.',
	};
	languages = [
		{ name: ' Portugu\xEAs', level: 10 },
		{ name: ' Ingl\xEAs', level: 6 },
		{ name: ' Japon\xEAs', level: 4 },
	];
	courses = [
		{ institution: ' Faculdade Opet', name: ' Jogos Digitais (T\xE9cnico)', timeSpent: ' 1 ano' },
		{ institution: 'Udemy', name: 'Web Development', timeSpent: '54h' },
		{ institution: 'Udemy', name: 'Reactive programming', timeSpent: '17h' },
		{ institution: 'Udemy', name: 'PHP/Laravel/Symfony', timeSpent: '115h' },
		{ institution: 'Udemy', name: 'Angular 2+', timeSpent: '29h' },
		{ institution: 'Udemy', name: 'React/Redux', timeSpent: '54h' },
		{ institution: 'Udemy', name: 'NodeJS', timeSpent: '15h' },
		{ institution: 'Udemy', name: 'Design Pattern', timeSpent: '29h' },
		{ institution: 'Udemy', name: 'SOLID', timeSpent: '5h' },
		{ institution: 'Udemy', name: 'UI/UX Design', timeSpent: '77h' },
	];
	frontend = [
		{ name: 'Angular 2+ (v18)', level: 9 },
		{ name: 'ReactJS', level: 8 },
		{ name: 'JavaScript', level: 7 },
		{ name: 'TypeScript', level: 7 },
		{ name: 'RxJS', level: 7 },
		{ name: 'Redux', level: 6 },
		{ name: 'HTML5', level: 9 },
		{ name: 'CSS3 / SCSS', level: 9 },
		{ name: 'Jest', level: 5 },
		{ name: 'Docker / CI/CD', level: 5 },
	];
	backend = [
		{ name: 'PHP', level: 5 },
		{ name: 'Laravel', level: 5 },
		{ name: 'Symfony', level: 5 },
		{ name: 'NodeJS', level: 7 },
		{ name: 'SQL', level: 5 },
		{ name: 'SOLID', level: 6 },
		{ name: 'Design Pattern', level: 5 },
	];
	experiences = [
		{
			company: 'Banco BS2',
			startedAt: ' SET 2022',
			endedAt: ' JAN 2026',
			responsabilities: [
				' Arquitetura e desenvolvimento de Design System corporativo com Angular 18.',
				' Lideran\xE7a na migra\xE7\xE3o de aplica\xE7\xF5es legadas (Angular 12 \u2192 18).',
				' Implementa\xE7\xE3o de internacionaliza\xE7\xE3o (i18n) e otimiza\xE7\xE3o de performance.',
				' Mentoria t\xE9cnica e Code Reviews focados em Clean Code e SOLID.',
			],
			softSkills: [' Lideran\xE7a T\xE9cnica;', ' Resolu\xE7\xE3o de Problemas;', ' Comunica\xE7\xE3o Eficaz;'],
			hardSkills: [' Cursos t\xE9cnicos;'],
			description:
				' Como Desenvolvedor S\xEAnior, liderei a arquitetura do Frontend, criando um Design System robusto (componentes, diretivas, pipes) que padronizou m\xFAltiplos produtos do banco. Executei migra\xE7\xF5es complexas de vers\xE3o do Angular, garantindo zero downtime. Implementei estrat\xE9gias de i18n para suporte global (PT/EN/ZH) e promovi a cultura de qualidade de c\xF3digo atrav\xE9s de mentorias e workshops internos.',
		},
		{
			company: 'Tagme',
			startedAt: ' JUN 2021 ',
			endedAt: ' AGO 2022',
			responsabilities: [
				' Lideran\xE7a t\xE9cnica de Frontend em novos projetos (Greenfield).',
				' Defini\xE7\xE3o de arquitetura escal\xE1vel e escolhas tecnol\xF3gicas.',
				' Onboarding e capacita\xE7\xE3o t\xE9cnica do time de desenvolvimento.',
			],
			softSkills: [' Lideran\xE7a T\xE9cnica;', ' Proatividade;'],
			hardSkills: [' Cursos t\xE9cnicos;'],
			description:
				' Atuei como Tech Lead de Frontend, respons\xE1vel pela concep\xE7\xE3o e desenvolvimento de novos produtos do zero. Defini a stack tecnol\xF3gica e padr\xF5es de arquitetura, garantindo escalabilidade e manutenibilidade. Conduzi o time atrav\xE9s de desafios t\xE9cnicos, implementando boas pr\xE1ticas de desenvolvimento e realizando workshops para nivelamento t\xE9cnico da equipe.',
		},
		{
			company: 'Bitknot',
			startedAt: ' JAN 2021',
			endedAt: ' ABR 2021',
			responsabilities: [
				' Desenvolvimento Full-Stack em ambiente internacional (Jap\xE3o).',
				' Moderniza\xE7\xE3o de sistemas legados e cria\xE7\xE3o de Landing Pages.',
			],
			softSkills: [' Adaptabilidade Cultural;', ' Trabalho Remoto Global;'],
			description:
				' Atua\xE7\xE3o em time multicultural japon\xEAs, desenvolvendo solu\xE7\xF5es web com foco em alta fidelidade de design e performance. Respons\xE1vel pela manuten\xE7\xE3o de sistemas cr\xEDticos e entrega de novas features, seguindo rigorosos padr\xF5es de qualidade e prazos.',
		},
		{
			company: 'Tuxon',
			startedAt: ' FEV 2020',
			endedAt: ' NOV 2020',
			responsabilities: [
				' Manuten\xE7\xE3o nos sistemas existentes.',
				' Cria\xE7\xE3o de novas funcionalidades.',
				' Cria\xE7\xE3o de projetos do zero.',
			],
			softSkills: [
				' Capacidade de persuas\xE3o;',
				' Proatividade;',
				' Capacidade de trabalhar sob press\xE3o;',
				' Capacidade anal\xEDtica.',
			],
			hardSkills: [' Cursos t\xE9cnicos;', ' habilidades ligadas \xE0 inform\xE1tica.'],
			description:
				' Atua\xE7\xE3o na manuten\xE7\xE3o de sistemas existentes, desenvolvimento de novas funcionalidades e cria\xE7\xE3o de projetos do zero. Perfil proativo, com forte capacidade anal\xEDtica, habilidade para trabalhar sob press\xE3o e boa comunica\xE7\xE3o para alinhamento t\xE9cnico com o time.',
		},
		{
			company: 'Interlink',
			startedAt: ' OUT 2019',
			endedAt: ' FEV 2020',
			responsabilities: [
				' Implementa\xE7\xE3o de arquitetura de estado com Redux do zero.',
				' Desenvolvimento Full-Stack (ReactJS + Node.js) para mercado americano.',
			],
			softSkills: [' Ingl\xEAs Fluente;', ' Autonomia;'],
			description:
				' Desenvolvedor Full-Stack em projeto internacional (EUA). Projetei e implementei toda a camada de gerenciamento de estado com Redux, resolvendo problemas complexos de fluxo de dados. Atuei tanto no Frontend (React) quanto no Backend, garantindo a integridade e escalabilidade da aplica\xE7\xE3o.',
		},
		{
			company: '4You2 Idiomas',
			startedAt: ' ABR 2019',
			endedAt: ' SET 2019',
			responsabilities: [
				' Mentoriamento de novos colaboradores.',
				' Manuten\xE7\xE3o nos sistemas existentes.',
				' Cria\xE7\xE3o de novas funcionalidades.',
				' Cria\xE7\xE3o de projetos do zero.',
			],
			softSkills: [
				' Proatividade;',
				' Capacidade de trabalhar sob press\xE3o;',
				' Lideran\xE7a T\xE9cnica;',
				' Capacidade anal\xEDtica.',
			],
			hardSkills: [' Conhecimento em uma l\xEDngua estrangeira;', ' Cursos t\xE9cnicos;'],
			description:
				' Atua\xE7\xE3o na manuten\xE7\xE3o e evolu\xE7\xE3o de sistemas existentes, desenvolvimento de novas funcionalidades e cria\xE7\xE3o de projetos do zero. Forte experi\xEAncia com ingl\xEAs no dia a dia, participando de dailies e alinhamentos t\xE9cnicos com falantes nativos, entendendo demandas diretamente com o time internacional e realizando implementa\xE7\xF5es e ajustes cont\xEDnuos. Atua\xE7\xE3o ativa no mentoriamento de novos colaboradores, apoiando onboarding, direcionamento t\xE9cnico e evolu\xE7\xE3o profissional, com perfil proativo, anal\xEDtico e senso de lideran\xE7a.',
		},
		{
			company: 'SPRO IT Solutions',
			startedAt: ' SET 2018',
			endedAt: ' ABR 2019',
			responsabilities: [
				' Manuten\xE7\xE3o nos sistemas existentes.',
				' Cria\xE7\xE3o de novas funcionalidades.',
				' Cria\xE7\xE3o de projetos do zero.',
			],
			softSkills: [' Proatividade;', ' Capacidade de trabalhar sob press\xE3o;', ' Capacidade anal\xEDtica.'],
			hardSkills: [' Cursos t\xE9cnicos;'],
			description:
				' Atua\xE7\xE3o na manuten\xE7\xE3o de sistemas existentes, desenvolvimento de novas funcionalidades e cria\xE7\xE3o de projetos do zero, com forte foco em automa\xE7\xE3o de processos. Mapeamento e entendimento de tarefas manuais que levavam dias ou semanas para serem executadas, criando automa\xE7\xF5es que passaram a realizar esses processos em segundos, acelerando significativamente o fluxo de trabalho e apoiando diretamente outras \xE1reas da empresa.',
		},
		{
			company: 'DevMaker',
			startedAt: ' OUT 2017',
			endedAt: ' SET 2018',
			responsabilities: [
				' Manuten\xE7\xE3o nos sistemas existentes.',
				' Cria\xE7\xE3o de novas funcionalidades.',
				' Cria\xE7\xE3o de projetos do zero.',
			],
			softSkills: [' Proatividade;', ' Capacidade de trabalhar sob press\xE3o;', ' Capacidade anal\xEDtica.'],
			hardSkills: [' Cursos t\xE9cnicos;'],
			description:
				' Apesar da posi\xE7\xE3o j\xFAnior, identifiquei a alta demanda de projetos e a dificuldade do time em manter o ritmo de entregas. Em alinhamento com o time de design, liderei a padroniza\xE7\xE3o dos componentes da empresa, criando varia\xE7\xF5es reutiliz\xE1veis aplicadas em todos os novos projetos. Para viabilizar essa iniciativa, estudei profundamente frameworks como Bootstrap, Material e Semantic UI, desenvolvendo uma solu\xE7\xE3o adaptada \xE0s necessidades da empresa, o que contribuiu para redu\xE7\xE3o de horas extras e trabalho aos fins de semana.',
		},
		{
			company: '01Tec',
			startedAt: ' ABR 2015',
			endedAt: ' SET 2016',
			responsabilities: [' Manuten\xE7\xE3o nos sistemas existentes.', ' Cria\xE7\xE3o de projetos do zero.'],
			softSkills: [' Proatividade;', ' Capacidade anal\xEDtica.'],
			hardSkills: [' Cursos t\xE9cnicos;'],
			description:
				' Experi\xEAncia de est\xE1gio onde iniciei com conhecimentos b\xE1sicos em l\xF3gica de programa\xE7\xE3o e evolu\xED para o desenvolvimento web completo, aprendendo HTML, CSS, JavaScript, jQuery, PHP e MySQL, al\xE9m da cria\xE7\xE3o de temas para WordPress. Ap\xF3s o per\xEDodo de est\xE1gio, atuei como freelancer para a empresa por alguns meses, contribuindo em projetos adicionais.',
		},
		{
			company: ' Servi\xE7os comunit\xE1rios',
			startedAt: ' ABR 2015',
			endedAt: ' SET 2016',
			responsabilities: [
				' Ensinar programa\xE7\xE3o (Projeto Lovelace)',
				' Fazer palestras.',
				' Distribuir cobertores.',
				' Distribuir alimentos.',
				' Dar aula de m\xFAsica.',
				' Auxiliar na mudan\xE7a das pessoas.',
				' M\xFAsica e Teatro ao ar livre.',
			],
			description:
				' Atua\xE7\xE3o em iniciativas comunit\xE1rias, incluindo ensino de programa\xE7\xE3o, realiza\xE7\xE3o de palestras educativas, distribui\xE7\xE3o de cobertores e alimentos para pessoas em situa\xE7\xE3o de vulnerabilidade, aulas de m\xFAsica, apoio em mudan\xE7as residenciais e participa\xE7\xE3o em apresenta\xE7\xF5es de m\xFAsica e teatro ao ar livre, contribuindo para educa\xE7\xE3o, cultura e apoio social.',
		},
	];
	static ɵfac = function (c) {
		return new (c || m)();
	};
	static ɵcmp = f({
		type: m,
		selectors: [['app-felipetiwamoto']],
		decls: 55,
		vars: 133,
		consts: () => {
			let d;
			d = ' Portugu\xEAs ';
			let c;
			c = ' Ingl\xEAs ';
			let l;
			l = 'EXPERI\xCANCIAS';
			let i;
			i = 'SOBRE MIM';
			let u;
			u = 'LINGUAGENS';
			let S;
			S = 'CURSOS';
			let v;
			v = 'HABILIDADES';
			let x;
			x = 'Frontend';
			let M;
			return (
				(M = 'Backend'),
				[
					d,
					c,
					l,
					i,
					u,
					S,
					v,
					x,
					M,
					['href', '/cv/pt'],
					['href', '/cv/en'],
					[3, 'hero'],
					[3, 'contacts'],
					['name', 'briefcase-business', 3, 'size', 'strokeWidth'],
					[3, 'experiences'],
					['name', 'user', 3, 'size', 'strokeWidth'],
					[3, 'about'],
					['name', 'globe', 3, 'size', 'strokeWidth'],
					[3, 'skills'],
					['name', 'graduation-cap', 3, 'size', 'strokeWidth'],
					[3, 'courses'],
					['name', 'medal', 3, 'size', 'strokeWidth'],
				]
			);
		},
		template: function (c, l) {
			if (
				(c & 1 &&
					(n(0, 'div')(1, 'div')(2, 'ul')(3, 'li')(4, 'a', 9),
					_(5, 0),
					a()(),
					n(6, 'li')(7, 'a', 10),
					_(8, 1),
					a()()(),
					n(9, 'div')(10, 'div')(11, 'div'),
					r(12, 'resume-hero01', 11),
					a(),
					n(13, 'div'),
					r(14, 'resume-contacts01', 12),
					a()(),
					n(15, 'div')(16, 'div')(17, 'div')(18, 'div'),
					r(19, 'i-lucide', 13),
					n(20, 'span'),
					_(21, 2),
					a()(),
					r(22, 'resume-experiences01', 14),
					a()(),
					n(23, 'div')(24, 'div')(25, 'div'),
					r(26, 'i-lucide', 15),
					n(27, 'span'),
					_(28, 3),
					a()(),
					r(29, 'resume-about01', 16),
					a(),
					n(30, 'div')(31, 'div'),
					r(32, 'i-lucide', 17),
					n(33, 'span'),
					_(34, 4),
					a()(),
					r(35, 'resume-skills01', 18),
					a(),
					n(36, 'div')(37, 'div'),
					r(38, 'i-lucide', 19),
					n(39, 'span'),
					_(40, 5),
					a()(),
					r(41, 'resume-courses01', 20),
					a(),
					n(42, 'div')(43, 'div'),
					r(44, 'i-lucide', 21),
					n(45, 'span'),
					_(46, 6),
					a()(),
					n(47, 'div')(48, 'span'),
					_(49, 7),
					a(),
					r(50, 'resume-skills01', 18),
					a(),
					n(51, 'div')(52, 'span'),
					_(53, 8),
					a(),
					r(54, 'resume-skills01', 18),
					a()()()()()()()),
				c & 2)
			) {
				let i = 'resume';
				(t(i),
					e(),
					t(o('', i, '__page')),
					e(),
					t(o('', i, '__lang')),
					e(),
					t(o('', i, '__lang_item')),
					e(),
					t(E('', i, '__lang_link ', l.localize.locale === 'pt' ? i + '__lang_link--active' : '')),
					e(2),
					t(o('', i, '__lang_item')),
					e(),
					t(E('', i, '__lang_link ', l.localize.locale === 'en' ? i + '__lang_link--active' : '')),
					e(2),
					t(o('', i, '__container')),
					e(),
					t(o('', i, '__top')),
					e(),
					t(o('', i, '__top_left')),
					e(),
					s('hero', l.hero),
					e(),
					t(o('', i, '__top_right')),
					e(),
					s('contacts', l.contacts),
					e(),
					t(o('', i, '__bottom')),
					e(),
					t(o('', i, '__bottom_left')),
					e(),
					t(o('', i, '__section')),
					e(),
					t(o('', i, '__section_title')),
					e(),
					t(o('', i, '__section_title_icon')),
					s('size', 24)('strokeWidth', 2),
					e(),
					t(o('', i, '__section_title_text')),
					e(2),
					s('experiences', l.experiences),
					e(),
					t(o('', i, '__bottom_right')),
					e(),
					t(o('', i, '__section')),
					e(),
					t(o('', i, '__section_title')),
					e(),
					t(o('', i, '__section_title_icon')),
					s('size', 24)('strokeWidth', 2),
					e(),
					t(o('', i, '__section_title_text')),
					e(2),
					s('about', l.about),
					e(),
					t(o('', i, '__section')),
					e(),
					t(o('', i, '__section_title')),
					e(),
					t(o('', i, '__section_title_icon')),
					s('size', 24)('strokeWidth', 2),
					e(),
					t(o('', i, '__section_title_text')),
					e(2),
					s('skills', l.languages),
					e(),
					t(o('', i, '__section')),
					e(),
					t(o('', i, '__section_title')),
					e(),
					t(o('', i, '__section_title_icon')),
					s('size', 24)('strokeWidth', 2),
					e(),
					t(o('', i, '__section_title_text')),
					e(2),
					s('courses', l.courses),
					e(),
					t(o('', i, '__section')),
					e(),
					t(o('', i, '__section_title')),
					e(),
					t(o('', i, '__section_title_icon')),
					s('size', 24)('strokeWidth', 2),
					e(),
					t(o('', i, '__section_title_text')),
					e(2),
					t(o('', i, '__sub_section')),
					e(),
					t(o('', i, '__section_sub_title')),
					e(2),
					s('skills', l.frontend),
					e(),
					t(o('', i, '__sub_section')),
					e(),
					t(o('', i, '__section_sub_title')),
					e(2),
					s('skills', l.backend));
			}
		},
		dependencies: [I, R, y, g, C, h, P, b],
		styles: [
			'.resume[_ngcontent-%COMP%]{--resume_right_side: 100%;padding:60px 10px;background-color:var(--greye);display:flex;align-items:center;justify-content:center;flex-direction:initial}@media all and (min-width:768px){.resume[_ngcontent-%COMP%]{padding:100px 10px 50px;--resume_right_side: 200px}}.resume__page[_ngcontent-%COMP%]{position:relative;width:min(100%,25cm);min-height:33.7cm;padding:30px 10px;box-sizing:border-box;background-color:var(--greyf)}@media all and (min-width:768px){.resume__page[_ngcontent-%COMP%]{padding:90px}}.resume__lang[_ngcontent-%COMP%]{position:absolute;top:-40px;right:0;display:flex;align-items:center;justify-content:center;flex-direction:initial;margin-bottom:20px;column-gap:10px}.resume__lang_link[_ngcontent-%COMP%]{padding:5px 10px;font-size:14px;font-weight:300;letter-spacing:initial;line-height:initial;cursor:pointer;color:var(--grey7);border-radius:50px;background-color:var(--greyf)}.resume__lang_link--active[_ngcontent-%COMP%]{color:var(--resume01_primary);font-weight:600}.resume__container[_ngcontent-%COMP%]{width:min(100% - 20px,768px);margin-inline:auto;position:relative}.resume__top[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr;row-gap:30px}@media all and (min-width:768px){.resume__top[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 200px;column-gap:30px;row-gap:0px}}.resume__top_right[_ngcontent-%COMP%]{width:var(--resume_right_side)}.resume__bottom[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr;row-gap:30px}@media all and (min-width:768px){.resume__bottom[_ngcontent-%COMP%]{grid-template-columns:1fr 200px;column-gap:30px;row-gap:0px}}.resume__bottom_right[_ngcontent-%COMP%]{width:var(--resume_right_side)}.resume__section[_ngcontent-%COMP%], .resume__sub_section[_ngcontent-%COMP%]{margin-top:30px}.resume__section_title[_ngcontent-%COMP%]{color:var(--resume01_primary);display:flex;align-items:center;justify-content:center;flex-direction:initial;margin-bottom:30px;text-align:center}.resume__section_title[_ngcontent-%COMP%]   i-lucide[_ngcontent-%COMP%]{margin-right:10px}@media all and (min-width:768px){.resume__section_title[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:initial;flex-direction:initial;text-align:left}}.resume__section_title_icon[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:initial;flex-direction:initial}.resume__section_title_text[_ngcontent-%COMP%]{font-size:18px;font-weight:400;letter-spacing:initial;line-height:initial;display:block}.resume__section_sub_title[_ngcontent-%COMP%]{font-size:14px;font-weight:300;letter-spacing:initial;line-height:initial;margin-bottom:15px;display:block;color:var(--grey7)}',
		],
	});
};
export { O as FelipeTiwamoto }; /**i18n:6e3df05aac3d55a8718696d50ad78e922527b635cd9e1c53bf87806f3bd277e9*/
