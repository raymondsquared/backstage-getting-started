
backstage__%:
	${MAKE} --directory backstage -f Makefile $*

infrastructure__%:
	${MAKE} --directory infrastructure -f Makefile $*
