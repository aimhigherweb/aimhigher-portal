import Doc from '../../../img/doc.svg';
import Projects from '../../../img/project.svg';
import Analytics from '../../../img/analytics.svg';

const Icon = ({ icon }) => {
	let Img = false;

	// eslint-disable-next-line default-case
	switch (icon) {
		case `docs`:
		case `doc`:
			Img = Doc;
			break;
		case `projects`:
			Img = Projects;
			break;
		case `analytics`:
			Img = Analytics;
			break;
	}

	if (!Img) return <p>Error, icon {icon} doesn't exist</p>;

	return <Img />;
};

export default Icon;
